var app = angular.module('losari',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

        .state('conversations',{
            url: '/conversations',
            templateUrl: 'js/conversations/index.html',
            controller: 'ConversationCtrl'
        })

        .state("otherwise",{
            url: '',
            templateUrl: 'index.html'
        })


    
    $locationProvider.hashPrefix('');
});