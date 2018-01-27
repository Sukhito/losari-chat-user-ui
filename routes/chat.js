var con = require('./db');

module.exports = function(app){

    app.get('/api/chats',function(req,res){
        con.query("SELECT * FROM chats", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    })
}