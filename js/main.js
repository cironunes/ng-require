requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        app: '../'
    }
});

requirejs([
    'angular',
    'app/app',
    'app/controllers',
    'app/filters',
    'app/services',
    'app/directives'
    ], function() {
        angular.bootstrap(document, ['myApp']);
});