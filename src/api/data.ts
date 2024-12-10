interface Options {
    value: string;
    label: string;
}

export const Bairros: any[] = [
    { value: "Barragem", label: "Barragem", lat: -27.197318, lng: -49.642573 },
    { value: "Canta Galo", label: "Canta Galo", lat: -27.223101, lng: -49.621809 },
    { value: "Centro", label: "Centro", lat: -27.210691, lng: -49.643487 },
    { value: "Santana", label: "Santana", lat: -27.205951, lng: -49.654320 },
    { value: "Navegantes", label: "Navegantes",lat: -27.189350, lng: -49.606480 },
    { value: "Jardim America", label: "Jardim America", lat: -27.195398, lng: -49.643238 }
]

export const PontoDeOnibus = [
    { lat: -27.210691, lng: -49.643487, title: 'Ponto de Ônibus - Centro de Rio do Sul' },
    { lat: -27.189350, lng: -49.606480, title: 'Ponto de Ônibus - Navegantes' },
    { lat: -27.205951, lng: -49.654320, title: 'Ponto de Ônibus - Santana' },
    { lat: -27.197318, lng: -49.642573, title: 'Ponto de Ônibus - Barragem' },
    { lat: -27.223101, lng: -49.621809, title: 'Ponto de Ônibus - Canta Galo' },
    { lat: -27.195398, lng: -49.643238, title: 'Ponto de Ônibus - Jardim América' }
]

export const horarios = {
    "Barra do Trombudo (Ribeirão do Tigre)": [
        { partidaCentro: "11:55", partidaBairro: "06:55", dias: "Todos os dias" },
        { partidaCentro: "18:05", partidaBairro: "12:45", dias: "Todos os dias" }
    ],
    "Barra do Trombudo": [
        { partidaCentro: "05:30", partidaBairro: "05:00", dias: "Todos os dias" },
        { partidaCentro: "06:30", partidaBairro: "05:55", dias: "Todos os dias" },
        { partidaCentro: "06:45", partidaBairro: "06:25", dias: "Todos os dias" },
        { partidaCentro: "07:10", partidaBairro: "06:35", dias: "Todos os dias" },
        { partidaCentro: "07:20", partidaBairro: "06:45", dias: "Todos os dias" },
        { partidaCentro: "08:00", partidaBairro: "07:05", dias: "Todos os dias" },
        { partidaCentro: "08:30", partidaBairro: "07:30", dias: "Todos os dias" },
        { partidaCentro: "09:50", partidaBairro: "08:00", dias: "Todos os dias" }
    ],
    "Barra do Trombudo (Via BR-470)": [
        { partidaCentro: "06:15", partidaBairro: "06:50", dias: "Todos os dias" },
        { partidaCentro: "07:05", partidaBairro: "07:35", dias: "Todos os dias" },
        { partidaCentro: "13:45", partidaBairro: "17:35", dias: "Todos os dias" }
    ],
    "Morro do Budag": [
        { partidaCentro: "12:05", partidaBairro: "06:25", dias: "Todos os dias" },
        { partidaCentro: "18:05", partidaBairro: "07:35", dias: "Todos os dias" }
    ],
    "Bela Aliança": [
        { partidaCentro: "07:10", partidaBairro: "06:25", dias: "Segunda a Sexta" },
        { partidaCentro: "07:35", partidaBairro: "07:35", dias: "Segunda a Sexta" },
        { partidaCentro: "14:35", partidaBairro: "14:35", dias: "Segunda a Sexta" }
    ],
    "Alto Matador (Bela Aliança)": [
        { partidaCentro: "06:10", partidaBairro: "06:40", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:40", dias: "Segunda a Sexta" },
        { partidaCentro: "15:00", partidaBairro: "15:30", dias: "Segunda a Sexta" },
        { partidaCentro: "16:55", partidaBairro: "17:30", dias: "Segunda a Sexta" },
        { partidaCentro: "18:05", partidaBairro: "17:30", dias: "Segunda a Sexta" },
        { partidaCentro: "22:10", partidaBairro: "22:10", dias: "Segunda a Sexta" }
    ],
    "Taboão": [
        { partidaCentro: "06:00", partidaBairro: "06:45", dias: "Segunda a Sexta" },
        { partidaCentro: "07:40", partidaBairro: "08:00", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:50", dias: "Segunda a Sexta" },
        { partidaCentro: "15:00", partidaBairro: "15:20", dias: "Segunda a Sexta" },
        { partidaCentro: "17:00", partidaBairro: "17:30", dias: "Segunda a Sexta" },
        { partidaCentro: "18:15", partidaBairro: "18:30", dias: "Segunda a Sexta" }
    ],
    "Taboão – Serra Taboão": [
        { partidaCentro: "06:00", partidaBairro: "06:35", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:40", dias: "Segunda a Sexta" },
        { partidaCentro: "18:15", partidaBairro: "18:15", dias: "Segunda a Sexta" }
    ],
    "Rainha": [
        { partidaCentro: "05:35", partidaBairro: "05:55", dias: "Segunda a Sexta" },
        { partidaCentro: "06:45", partidaBairro: "06:45", dias: "Segunda a Sexta" },
        { partidaCentro: "07:05", partidaBairro: "07:00", dias: "Segunda a Sexta" },
        { partidaCentro: "08:30", partidaBairro: "07:30", dias: "Segunda a Sexta" },
        { partidaCentro: "11:10", partidaBairro: "09:00", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "11:35", dias: "Segunda a Sexta" },
        { partidaCentro: "14:30", partidaBairro: "12:50", dias: "Segunda a Sexta" },
        { partidaCentro: "15:30", partidaBairro: "15:00", dias: "Segunda a Sexta" },
        { partidaCentro: "16:30", partidaBairro: "16:00", dias: "Segunda a Sexta" },
        { partidaCentro: "17:00", partidaBairro: "17:00", dias: "Segunda a Sexta" },
        { partidaCentro: "18:15", partidaBairro: "17:35", dias: "Segunda a Sexta" },
        { partidaCentro: "22:30", partidaBairro: "18:30", dias: "Segunda a Sexta" }
    ],
    "Santa Rita": [
        { partidaCentro: "05:40", partidaBairro: "06:10", dias: "Segunda a Sexta" },
        { partidaCentro: "07:05", partidaBairro: "07:30", dias: "Segunda a Sexta" },
        { partidaCentro: "08:30", partidaBairro: "09:00", dias: "Segunda a Sexta" },
        { partidaCentro: "11:10", partidaBairro: "11:35", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:50", dias: "Segunda a Sexta" },
        { partidaCentro: "13:15", partidaBairro: "13:30", dias: "Segunda a Sexta" },
        { partidaCentro: "15:30", partidaBairro: "15:50", dias: "Segunda a Sexta" },
        { partidaCentro: "16:30", partidaBairro: "16:55", dias: "Segunda a Sexta" },
        { partidaCentro: "17:00", partidaBairro: "17:30", dias: "Segunda a Sexta" },
        { partidaCentro: "18:15", partidaBairro: "18:30", dias: "Segunda a Sexta" }
    ],
    "Rainha (Via Bairro Navegantes)": [
        { partidaCentro: "06:15", partidaBairro: "07:30", dias: "Segunda a Sexta" }
    ],
    "Fundo Canoas": [
        { partidaCentro: "08:30", partidaBairro: "07:45", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:20", dias: "Segunda a Sexta" },
        { partidaCentro: "15:15", partidaBairro: "15:30", dias: "Segunda a Sexta" }
    ],
    "Serra Canoas": [
        { partidaCentro: "07:15", partidaBairro: "07:35", dias: "Segunda a Sexta" },
        { partidaCentro: "12:00", partidaBairro: "12:20", dias: "Segunda a Sexta" },
        { partidaCentro: "15:15", partidaBairro: "15:30", dias: "Segunda a Sexta" }
    ],
    "Progresso": [
        { partidaCentro: "06:00", partidaBairro: "05:30", dias: "Segunda a Sexta" },
        { partidaCentro: "07:00", partidaBairro: "07:00", dias: "Segunda a Sexta" },
        { partidaCentro: "11:05", partidaBairro: "11:20", dias: "Segunda a Sexta" },
        { partidaCentro: "14:00", partidaBairro: "14:15", dias: "Segunda a Sexta" },
        { partidaCentro: "16:00", partidaBairro: "16:15", dias: "Segunda a Sexta" },
        { partidaCentro: "17:30", partidaBairro: "17:45", dias: "Segunda a Sexta" }
    ],
    "Fundo Cobras": [
        { partidaCentro: "06:00", partidaBairro: "06:30", dias: "Segunda a Sexta" },
        { partidaCentro: "09:00", partidaBairro: "09:30", dias: "Segunda a Sexta" },
        { partidaCentro: "12:00", partidaBairro: "12:30", dias: "Segunda a Sexta" },
        { partidaCentro: "14:15", partidaBairro: "14:45", dias: "Segunda a Sexta" },
        { partidaCentro: "16:00", partidaBairro: "16:30", dias: "Segunda a Sexta" }
    ],
    "Fundo Itoupava": [
        { partidaCentro: "06:15", partidaBairro: "06:50", dias: "Segunda a Sexta" },
        { partidaCentro: "09:00", partidaBairro: "09:30", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:40", dias: "Segunda a Sexta" },
        { partidaCentro: "14:30", partidaBairro: "15:00", dias: "Segunda a Sexta" },
        { partidaCentro: "17:00", partidaBairro: "17:30", dias: "Segunda a Sexta" }
    ],
    "Boa Vista": [
        { partidaCentro: "05:30", partidaBairro: "06:00", dias: "Segunda a Sexta" },
        { partidaCentro: "12:00", partidaBairro: "12:30", dias: "Segunda a Sexta" },
        { partidaCentro: "16:00", partidaBairro: "16:30", dias: "Segunda a Sexta" }
    ],
    "Ruy Barbosa": [
        { partidaCentro: "06:15", partidaBairro: "07:00", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:50", dias: "Segunda a Sexta" },
        { partidaCentro: "17:15", partidaBairro: "18:00", dias: "Segunda a Sexta" }
    ],
    "Albertina": [
        { partidaCentro: "07:10", partidaBairro: "06:30", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:30", dias: "Segunda a Sexta" },
        { partidaCentro: "16:30", partidaBairro: "16:50", dias: "Segunda a Sexta" }
    ],
    "Canta Galo": [
        { partidaCentro: "05:45", partidaBairro: "05:55", dias: "Segunda a Sexta" },
        { partidaCentro: "06:30", partidaBairro: "07:00", dias: "Segunda a Sexta" },
        { partidaCentro: "12:05", partidaBairro: "12:20", dias: "Segunda a Sexta" },
        { partidaCentro: "14:00", partidaBairro: "14:20", dias: "Segunda a Sexta" },
        { partidaCentro: "16:00", partidaBairro: "16:20", dias: "Segunda a Sexta" }
    ],
    "Lot. São Pedro (Condomínio Marcolino Felipe)": [
        { partidaCentro: "05:30", partidaBairro: "06:00", dias: "Segunda a Sexta" },
        { partidaCentro: "11:10", partidaBairro: "11:30", dias: "Segunda a Sexta" },
        { partidaCentro: "15:15", partidaBairro: "15:45", dias: "Segunda a Sexta" }
    ],
    "Saída do Condomínio": [
        { partidaCentro: "07:00", partidaBairro: "07:35", dias: "Segunda a Sexta" },
        { partidaCentro: "12:00", partidaBairro: "12:40", dias: "Segunda a Sexta" },
        { partidaCentro: "15:20", partidaBairro: "15:50", dias: "Segunda a Sexta" }
    ],
    "Loteamento Continental": [
        { partidaCentro: "07:00", partidaBairro: "07:20", dias: "Segunda a Sexta" },
        { partidaCentro: "11:10", partidaBairro: "11:45", dias: "Segunda a Sexta" },
        { partidaCentro: "16:00", partidaBairro: "16:30", dias: "Segunda a Sexta" }
    ]
}