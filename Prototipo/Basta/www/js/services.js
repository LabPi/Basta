angular.module('starter.services', [])

.factory('Grupos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var grupos = [{
    id: 1,
    nome: 'Brasília UM',
    frase: 'Auditando nosso dinheiro',
    cidade: 'Brasília',
    uf: 'DF',
    foto: 'img/ben.png',
    emendas: [
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
    ],
    membros: [
    {id: 1, nome: 'João Silva', email: 'joaosilva@dominio.com.br', cidade: 'Brasília', uf: 'DF' },
    {id: 2, nome: 'Maria Souza', email: 'mariasouza@dominio.com.br', cidade: 'Taguatinga', uf: 'DF' },
    ]
  }, {
    id: 2,
    nome: 'Fiscais dos Pampas',
    frase: 'Fiscalizando...',
    cidade: 'Porto Alegre',
    uf: 'RS',
    foto: 'img/max.png',
    emendas: [
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
    ],
    membros: [
    {id: 3, nome: 'Rogério Silva', email: 'rogeriosilva@dominio.com.br', cidade: 'Porto Alegre', uf: 'RS' },
    {id: 4, nome: 'Ziraldo Souza', email: 'ziraldosouza@dominio.com.br', cidade: 'Bagé', uf: 'RS' },
    ]
  }, {
    id: 3,
    nome: 'Basta! SP',
    frase: 'Contribuindo para um Brasil melhor!',
    cidade: 'São Paulo',
    uf: 'SP',
    foto: 'img/adam.jpg',
    emendas: [
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
    ],
    membros: [
    {id: 7, nome: 'Cristina Silva', email: 'cristinasilva@dominio.com.br', cidade: 'São Paulo', uf: 'SP' },
    {id: 8, nome: 'Saulo Souza', email: 'saulosouza@dominio.com.br', cidade: 'Osasco', uf: 'SP' },
    ]
  }, {
    id: 4,
    nome: 'Basta! RJ',
    frase: 'Na praia mas de olho...',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    foto: 'img/perry.png',
    emendas: [
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
      {numero: '38290001', objeto: 'Pavimentação e recape de vias urbanas em Cabreúva-SP.', valor_repasse: 'R$ 592.000,00', proponente: 'HENRIQUE MARTIN'},
    ],
    membros: [
    {id: 5, nome: 'Juliano Silva', email: 'julianosilva@dominio.com.br', cidade: 'Nova Iguaçu', uf: 'RJ' },
    {id: 6, nome: 'Mariana Souza', email: 'marianasouza@dominio.com.br', cidade: 'Rio de Janeiro', uf: 'RJ' },
    ]
  }];

  return {
    all: function() {
      return grupos;
    },
    inscrever: function(grupoId, usuario) {
      for (var i = 0; i < grupos.length; i++) {
        if (grupos[i].id === parseInt(grupoId)) {
          grupos[i].membros.push( usuario );
        }
      }
    },
    get: function(grupoId) {
      for (var i = 0; i < grupos.length; i++) {
        if (grupos[i].id === parseInt(grupoId)) {
          return grupos[i];
        }
      }
      return null;
    }
  };
})

.factory('Usuarios', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var usuarios = [{
    id: 0,
    nome: '',
    frase: '',
    cidade: '',
    uf: '',
    foto: '',
    grupos: [
    ]
  }];

  return {
    all: function() {
      return usuarios;
    },
    set: function(usuario) {
      usuarios[1] = usuario;
    },
    get: function(usuarioId) {
      if(parseInt(usuarioId) == -1) {
        return usuarios[0];
      }
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === parseInt(usuarioId)) {
          return usuarios[i];
        }
      }
      return null;
    }
  };
});
