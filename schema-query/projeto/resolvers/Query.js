const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola: () => 'Hello GraphQL',
  horaAtual: () => new Date,
  usuarioLogado: () => {
    return {
    id: 1,
    nome: 'Giovanni Strutz',
    email: 'giovannistrutz19@gmail.com',
    idade: 22,
    salario_real: 2500.60,
    vip: true
  }
},

  produtoDestaque: () => {
    return {
      nome: 'MacBook Pro',
      preco: 5000.00,
      disconto: 0.50
    }
  },
  numerosMegaSena: () => {
    const crescente = (a, b) => a + b
    const duplicados = (item, prev, array) => array.indexOf( item ) === prev
    // return [10, 20, 25, 10, 20].filter(duplicados)
    return Array(6).fill(0).map( () => parseInt(Math.random() * 61)).
      sort(crescente)
  },
  usuarios () {
    return usuarios
  },
  usuario (_, { args }) {
    const select = usuarios.filter(user => user.id === args)
    return select ? select[0] : null
  },
  perfis () {
    return perfis
  },
  perfil(_, { args }) {
    const select = perfis.filter( p => p.id === args )
    return select ? select[0] : null
  }
}
