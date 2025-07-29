const { Sequelize } = require('sequelize')

const conn = new Sequelize('toughts', 'root', '.Ph25120304', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  conn.authenticate()
  console.log('Conexão realizada com sucesso')
} catch (error) {
  console.log(`Erro ao se conectar: ${error}`)
}

module.exports = conn