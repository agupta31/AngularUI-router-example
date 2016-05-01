//adding ui.router as one of my dependency.
var myApp=angular.module("testApp",["ui.router"]);

myApp.config(function($stateProvider){
     
      //setting up the states
    //injected $stateProvider via dependency injection
    $stateProvider
       
     .state("state1",{
           url:"/state1",
          templateUrl:"partials/state1.html"
        
    })
    
     .state("state1.list",{
        
            url:"/state1.list",
            templateUrl:"partials/state1.list.html",
            controller:"appCtrl"
    })
    
    
    
     .state("state2",{
           url:"/state2",
           templateUrl:"partials/state2.html"
    })
    
    .state("state2.list",{
          url:"/state2.list",
          templateUrl:"partials/state2.list.html",
          controller:"appCtrl"
    })
    
   
});




myApp.controller("appCtrl",function($scope){
    
       $scope.person=[
           
                       {
                           name:'akash',
                           age:26
                       },
                      {    name:'utpal',
                           age:60
               
                       }
                   ];
    
    
      $scope.foods=[
          
                        {
                            name:"biryani",
                            points:100
                        } ,
                         {
                             name:"kebab",
                             points:95
                         }
          
                
      ];
      
});