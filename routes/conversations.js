var con = require('./db');

module.exports = function(app){

    app.get('/api/conversations',function(req,res){
        con.query("SELECT * FROM conversations", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    })

    app.post('/api/conversations',function(req,res){

        var conversation = req.body.conversation;
        var newChat = req.body.newChat;

        conversation.chats.push(newChat);
        var sql = "UPDATE conversations SET chats = '" + JSON.stringify(conversation.chats) + "' WHERE id = " + conversation.id;
        console.log(sql);
        con.query(sql,function(err,result,fields){
            console.log(result);
        });
    })
}