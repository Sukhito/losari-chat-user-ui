app.factory('ConversationService',function($http){
    return{
        getConversation: function(){
            return $http.get('api/conversations');
        },
        sendChat: function(newChat){
            return $http.post('api/conversations',newChat);
        },
        // updateItem : function(item){
        //     return $http.put('api/items/' + item._id,item);
        // },
        // getItem : function(id){
        //     return $http.get('api/items/' + id);
        // },
        // getDeliveryItem : function(id){
        //     return $http.get('api/deliveries/items/' + id);
        // },
        // getDelivery : function(_id){
        //     return $http.get('api/deliveries/' + _id);
        // }
    }
})