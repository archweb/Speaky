angular.module('myApp.services', ['ngRoute']);
angular.module('myApp.controllers', ['ngRoute']);
angular.module('myApp.directives', ['ngRoute']);
angular.module('myApp.filters', ['ngRoute']);
angular.module('myApp.factories', ['ngRoute']);
angular.module('myApp.constants', ['ngRoute']);
angular.module('myApp.feeds', ['ngRoute']);

var dependencies = 'ngRoute,ngAnimate,ngResource,ngSanitize,ngDialog,myApp.controllers,myApp.services,myApp.filters,myApp.directives,myApp.factories,myApp.constants'.split(',');
var productionDependencies = ['templates-desktopLite'];
var allDependencies = dependencies.concat(productionDependencies);

angular.module('myApp', allDependencies).config([
    '$httpProvider', '$compileProvider', '$locationProvider', '$logProvider',
    function ($httpProvider, $compileProvider, $locationProvider, $logProvider) {
        $compileProvider.debugInfoEnabled(false);
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);
        $logProvider.debugEnabled(false);
    }
]);