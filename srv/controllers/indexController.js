
// Esse controller está sendo elaborado de acordo com as demandas. como ainda não tem nenhuma view pronta, apontei pro antigo html do feed.
const controller = {}

    controller.index = (req, res) => res.render('index')
    controller.termos = (req, res) => res.render('termos-de-uso')

    controller.login = (req, res) => res.render('login')
    controller.loginSucesso = (req, res) => res.send('login realizado com Sucesso')

    controller.createAccount = (req, res) => res.render('create-account')
    controller.createAccountSucesso = (req, res) => res.send('conta criada com Sucesso')

    controller.criarPost = (req, res) => res.render('criar-post')
    controller.criarPostSucesso = (req, res) => res.send('post criado com Sucesso')

    controller.minhaConta = (req, res) => res.render('minhaconta')
    controller.minhaContaSucesso = (req, res) => res.send('conta alterada com Sucesso')

    

module.exports = controller