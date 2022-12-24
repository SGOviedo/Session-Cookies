const colors = require ('../data/colors');

module.exports = {

    msg: (req,res) => {
        res.render('msg')
    },

    logout: (req,res) => {
        res.render('logout')
    }
}