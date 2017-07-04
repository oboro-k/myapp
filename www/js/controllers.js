angular.module('starter.controllers', [])

    .controller('AboutCtrl', function ($scope) {})

    .controller('forecastsCtrl', function ($scope, forecasts) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.forecasts = forecasts.all();
        $scope.remove = function (forecast) {
            forecasts.remove(forecast);
        };
    })

    .controller('forecastDetailCtrl', function ($scope, $stateParams, forecasts) {
        $scope.forecast = forecasts.get($stateParams.forecastId);
    })

    .controller('configCtrl', function ($scope) {
        $scope.settings = {
            enableEcompass: true
        };
    });
