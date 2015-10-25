var app = angular.module('testApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'md.data.table']);
    var     DemoCtrl = function ($scope, $mdDialog, $timeout) {
        this.isOpen = false;
        this.selectedDirection = 'up';
        var self = this;
        $('md-fab-speed-dial').mouseenter(function () {
            $('md-radio-button[ng-value="true"]').click();
        });
        $('md-fab-speed-dial').mouseleave(function () {
            $('md-radio-button[ng-value="false"]').click();
        });
    }

    

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                  {
                      templateUrl: 'pages/login.html'
                  })
            .when('/Main',
                  {
                      templateUrl: 'pages/startpage.html'
                  })
            .when('/Projects',
                  {
                      templateUrl: 'pages/projects.html'
                  })
            .when('/AddProject',
                  {
                      templateUrl: 'pages/newproject.html'
                  });
    });



