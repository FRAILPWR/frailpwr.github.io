var app = angular.module("siteApp",[
        "ngRoute"
]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/",{templateUrl:"views/main.html"}
             )
        .when("/about",{templateUrl:"views/about.html"}
             )
        .when("/doc",{templateUrl:"views/doc.html"}
             )
        .when("/maps",{templateUrl:"views/maps.html"}
             )
        .when("/usecases",{templateUrl:"views/usecases.html"}
             )
        .when("/gs_ai",{templateUrl:"views/gs_ai.html"}
             )
        .when("/gs_blender",{templateUrl:"views/gs_blender.html"}
             )
        .when("/downloads",{templateUrl:"views/downloads.html"}
             )
        .when("/screens",{templateUrl:"views/screens.html"}
             )
        .when("/videos",{templateUrl:"views/videos.html"}
             )
        .when("/progression",{templateUrl:"views/progression.html"}
             )
        .when("/interactive_objects",{templateUrl:"views/interactive_objects.html"}
             )
        .otherwise({redirectTo:"/"}
                )
});
app.controller("MainCtrl",function($scope, $location) {
    $scope.isActive = function(currLoc) {
        return currLoc === $location.path()
    }
}
);
