angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/test.html',
                controller: TestCtrl
            }).
            when('/another', {
                templateUrl: 'views/another.html',
                controller: AnotherCtrl
            }).
            otherwise({redirectTo: '/'});
    }]);