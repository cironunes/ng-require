angular.module('myApp.filters', []).
    filter('interpolate', [function() {
        return function(text) {
            return text.replace('c', 't');
        }
    }]);