
// Esse controller está sendo elaborado de acordo com as demandas. como ainda não tem nenhuma view pronta, apontei pro antigo html do feed.
const controller = {}

controller.index = (req, res) => res.render('admin')

controller.postagens = (req, res) => res.render('lista-postagens')
controller.postagemShow = (req, res) => res.send('mostrar postagem')
controller.postagemEdit = (req, res) => res.send('postagem editada')
controller.postagemDelete = (req, res) => res.send('postagem deletada')


controller.usuarios = (req, res) => res.render('lista-usuarios')
controller.usuarioShow = (req, res) => res.send('mostrar usuário')
controller.usuarioEdit = (req, res) => res.send('usuário editado')
controller.usuarioDelete = (req, res) => res.send('usuário deletado')


controller.comentarios = (req, res) => res.render('lista-comentarios')
controller.comentarioShow = (req, res) => res.send('mostrar comentário')
controller.comentarioEdit = (req, res) => res.send('comentário editado')
controller.comentarioDelete = (req, res) => res.send('comentário deletado')

module.exports = controller