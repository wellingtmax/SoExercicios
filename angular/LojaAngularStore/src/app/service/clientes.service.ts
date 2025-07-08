import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  clientes = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com', telefone: '11999990001' },
    { id: 2, nome: 'Bruno Souza', email: 'bruno.souza@email.com', telefone: '11999990002' },
    { id: 3, nome: 'Carla Pereira', email: 'carla.pereira@email.com', telefone: '11999990003' },
    { id: 4, nome: 'Daniel Costa', email: 'daniel.costa@email.com', telefone: '11999990004' },
    { id: 5, nome: 'Eduarda Lima', email: 'eduarda.lima@email.com', telefone: '11999990005' },
    { id: 6, nome: 'Felipe Rocha', email: 'felipe.rocha@email.com', telefone: '11999990006' },
    { id: 7, nome: 'Gabriela Alves', email: 'gabriela.alves@email.com', telefone: '11999990007' },
    { id: 8, nome: 'Henrique Martins', email: 'henrique.martins@email.com', telefone: '11999990008' },
    { id: 9, nome: 'Isabela Fernandes', email: 'isabela.fernandes@email.com', telefone: '11999990009' },
    { id: 10, nome: 'João Oliveira', email: 'joao.oliveira@email.com', telefone: '11999990010' },
    { id: 11, nome: 'Karen Ribeiro', email: 'karen.ribeiro@email.com', telefone: '11999990011' },
    { id: 12, nome: 'Lucas Barros', email: 'lucas.barros@email.com', telefone: '11999990012' },
    { id: 13, nome: 'Mariana Teixeira', email: 'mariana.teixeira@email.com', telefone: '11999990013' },
    { id: 14, nome: 'Nicolas Cardoso', email: 'nicolas.cardoso@email.com', telefone: '11999990014' },
    { id: 15, nome: 'Olivia Mendes', email: 'olivia.mendes@email.com', telefone: '11999990015' },
    { id: 16, nome: 'Paulo Azevedo', email: 'paulo.azevedo@email.com', telefone: '11999990016' },
    { id: 17, nome: 'Quésia Santos', email: 'quesia.santos@email.com', telefone: '11999990017' },
    { id: 18, nome: 'Rafael Nunes', email: 'rafael.nunes@email.com', telefone: '11999990018' },
    { id: 19, nome: 'Sofia Batista', email: 'sofia.batista@email.com', telefone: '11999990019' },
    { id: 20, nome: 'Thiago Pinto', email: 'thiago.pinto@email.com', telefone: '11999990020' }
  ];
}
