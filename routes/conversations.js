var con = require('./db');

module.exports = function(app){

    app.get('/api/conversations',function(req,res){
        con.query("SELECT * FROM conversations", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    })
}