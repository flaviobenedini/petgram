
// Esse controller está sendo elaborado de acordo com as demandas. como ainda não tem nenhuma view pronta, apontei pro antigo html do feed.
const controller = {
    index: (req, res) => res.render('index'),
    termos: (req, res) => res.render('termos-de-uso'),
    login: (req, res) => res.render('login'),
    createAccount: (req, res) => res.render('create-account'),
    minhaConta: (req, res) => res.render('minhaconta'),
    criarPost: (req, res) => res.render('criar-post')

}

module.exports = controller