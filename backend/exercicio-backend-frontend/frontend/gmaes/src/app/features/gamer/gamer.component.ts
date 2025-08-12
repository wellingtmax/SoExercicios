import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamerService, Game } from '../../services/gamer.service';


@Component({
  selector: 'app-gamer',
  imports: [FormsModule, CommonModule],
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {

  games: Game[] = [];
  selectedGame?: Game;
  errorMessage = '';
  successMessage = '';
  newGame: Game = { id: 0, nome: '', tipo: '', ano: new Date().getFullYear(), imagem: '' };


  constructor(private gameService: GamerService){}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        console.log('Jogos carregados:', games);
        // Debug das imagens
        games.forEach(game => {
          console.log(`Jogo: ${game.nome}`);
          console.log(`  - Imagem DB: ${game.imagem}`);
          console.log(`  - Caminho resolvido: ${this.getImagePath(game.imagem)}`);
        });
      },
      error: () => this.errorMessage =  'Erro ao carregar jogos'
    });
  }

  selectGames(id: number): void {
    console.log('Selecionando jogo com ID:', id);
    this.gameService.getGamer(id).subscribe({
      next: (game) => {
        console.log('Jogo selecionado:', game);
        // Criar uma cópia do objeto para evitar editar o original
        this.selectedGame = { ...game };
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Erro ao buscar jogo:', err);
        this.errorMessage = 'Jogo não encontrado';
      }
    });
  }

  addGame(newGame: Game): void {
    this.gameService.postGamer(newGame).subscribe({
      next: () => {
        this.loadGames();
        // Resetar o formulário
        this.newGame = { id: 0, nome: '', tipo: '', ano: new Date().getFullYear(), imagem: '' };
        this.errorMessage = '';
        this.successMessage = 'Jogo adicionado com sucesso!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: () => this.errorMessage = 'Erro ao adicionar jogo'
    });
  }

  updateGame(updateGame: Game): void {
    console.log('Tentando atualizar jogo:', updateGame);
    console.log('URL da requisição:', `http://localhost:3000/api/games/${updateGame.id}`);

    if (updateGame.id) {
      this.gameService.putGamer(updateGame.id, updateGame).subscribe({
        next: (response) => {
          console.log('Jogo atualizado com sucesso:', response);
          this.loadGames();
          // Limpar seleção após atualizar
          this.selectedGame = undefined;
          this.errorMessage = '';
          this.successMessage = 'Jogo atualizado com sucesso!';
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (err) => {
          console.error('Erro completo:', err);
          console.error('Status:', err.status);
          console.error('Mensagem:', err.error);

          let errorMsg = 'Erro ao atualizar jogo: ';
          if (err.status === 500) {
            errorMsg += 'Erro interno do servidor. Verifique o backend.';
          } else if (err.status === 404) {
            errorMsg += 'Jogo não encontrado.';
          } else if (err.status === 400) {
            errorMsg += 'Dados inválidos.';
          } else {
            errorMsg += (err.error?.message || err.message || 'Erro desconhecido');
          }

          this.errorMessage = errorMsg;
        }
      });
    } else {
      this.errorMessage = 'ID do jogo não encontrado';
    }
  }

  deleteGame(id: number): void {
    this.gameService.delGamer(id).subscribe({
      next: () => this.loadGames(),
      error: () => this.errorMessage = 'Erro ao deletar jogo'
    });
  }

  // Função para tratar imagens quebradas
  onImageError(event: any): void {
    console.log('Erro ao carregar imagem:', event.target.src);
    // Usar uma imagem placeholder online
    event.target.src = 'https://via.placeholder.com/225x225/6c757d/ffffff?text=Sem+Imagem';
  }

  // Função para construir o caminho completo da imagem
  getImagePath(imageName: string): string {
    console.log('getImagePath chamado com:', imageName);

    if (!imageName) {
      console.log('Imagem vazia, usando placeholder');
      return 'https://via.placeholder.com/225x225/6c757d/ffffff?text=Sem+Imagem';
    }

    // Se já contém o caminho completo, retorna como está
    if (imageName.includes('assets/') || imageName.includes('http')) {
      console.log('Caminho completo detectado:', imageName);
      return imageName;
    }

    // Caso contrário, adiciona o caminho assets/img/
    const fullPath = `assets/img/${imageName}`;
    console.log('Caminho construído:', fullPath);
    return fullPath;
  }

  // Função para debug - pode ser chamada no console do navegador
  debugSelectedGame(): void {
    console.log('selectedGame atual:', this.selectedGame);
    console.log('games array:', this.games);
  }

}
