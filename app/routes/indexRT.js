module.exports = function(mocai) {
    mocai.get('/', function(req, res) {
        res.render('index');
    });
};