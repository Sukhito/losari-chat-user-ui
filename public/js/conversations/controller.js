app.controller('ConversationCtrl',function($scope,ConversationService){
    ConversationService.getConversation().then(
        function(response){
            $scope.conversation = response.data[0];
            $scope.conversation.chats = JSON.parse($scope.conversation.chats);
        }
    )

    $scope.user = {
        id : 100,
        name : "Ronan"
    };

    $scope.newChat = {
        body : "",
        date : null,
        name : $scope.user.name
    };

    $scope.send = function(){
        $scope.newChat.date = new Date();
        var conversationData = {
            newChat : $scope.newChat,
            conversation : $scope.conversation
        }
        ConversationService.sendChat(conversationData).then(function(response){
            if(response.data){
                console.log(response.data);
            }else{
                alert("Failed");
            }
        });
    }

})