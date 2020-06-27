const perfis = [
  { id: 1, role: 'comum'},
  { id: 2, role: 'admin'}
]

const usuarios = [{
  id: 1,
  nome: 'José Fernandes',
  email: 'jose.fernandes@gmail.com',
  idade: 22,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: 2,
  nome: 'Sofia Oliveira',
  email: 'sofia.oliveira@gmail.com',
  idade: 26,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: 3,
  nome: 'Jéssica Reis',
  email: 'jessicareis@gmail.com',
  idade: 23,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }