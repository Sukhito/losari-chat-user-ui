app.controller('ConversationCtrl',function($scope,ConversationService){
    ConversationService.getConversation().then(
        function(response){

            $scope.user = {
                id : 100,
                name : "Ronan"
            };

            $scope.conversation = response.data[0];
            $scope.chats = JSON.parse($scope.conversation.chats);

            $scope.send = function(){
                alert("send");
            }
        }
    )
})