import http from 'k6/http'
import { sleep, check } from 'k6'


export const options = {
    stages: [
        // Ramp-up: Aumenta gradualmente até 30k usuários
        {duration: '2m', target: 1000},    // 1k usuários em 2 min
        {duration: '3m', target: 5000},    // 5k usuários em 3 min
        {duration: '5m', target: 15000},   // 15k usuários em 5 min
        {duration: '5m', target: 30000},   // 30k usuários em 5 min
        
        // Stay: Mantém 30k usuários por um período
        {duration: '10m', target: 30000},  // Mantém 30k usuários por 10 min
        
        // Ramp-down: Reduz gradualmente
        {duration: '3m', target: 15000},   // Reduz para 15k em 3 min
        {duration: '2m', target: 5000},    // Reduz para 5k em 2 min
        {duration: '2m', target: 0},       // Reduz para 0 em 2 min
    ],
    
    // Configurações adicionais para teste de alta carga
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% das requisições devem ser < 500ms
        http_req_failed: ['rate<0.1'],    // Taxa de erro deve ser < 10%
        http_reqs: ['rate>1000'],         // Deve processar > 1000 req/s
    },
    
    // Configurações de recursos
    discardResponseBodies: true,  // Economiza memória descartando response bodies
    noConnectionReuse: false,     // Reutiliza conexões para melhor performance
}

export default function () {
    // Configurações da requisição para alta carga
    const params = {
        headers: {
            'User-Agent': 'k6-load-test',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
        timeout: '30s', // Timeout de 30 segundos
    }
    
    const res = http.get('https://www.proeis.rj.gov.br', params)
    
    // Verificações mais abrangentes
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 500ms': (r) => r.timings.duration < 500,
        'response time is less than 1s': (r) => r.timings.duration < 1000,
        'response size is greater than 0': (r) => r.body.length > 0,
        'no server errors': (r) => r.status < 500,
    })
    
    // Sleep variável para simular comportamento real do usuário
    sleep(Math.random() * 2 + 1) // Entre 1 e 3 segundos
}
