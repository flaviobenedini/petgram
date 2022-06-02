
// Esse controller está sendo elaborado de acordo com as demandas. como ainda não tem nenhuma view pronta, apontei pro antigo html do feed.
const controller = {}

controller.postagens = (req, res) => res.render('lista-postagens')
controller.usuarios = (req, res) => res.render('')
controller.comentarios = (req, res) => res.render('')

module.exports = controller