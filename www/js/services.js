angular.module('starter.services', [])

    .factory('forecasts', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var forecasts = [{
            id: 0,
            country: 'Australia,Sydney',
            lastText: "It's clear all day !",
            flag: 'img/Australia-icon.png',
            weather: 'img/sunny-outline.png'
  }, {
            id: 1,
            country: 'Brazil,Brasilia',
            lastText: "It's heavy rain in the morning",
            flag: 'img/Brazil-icon.png',
            weather: 'img/rainy-outline.png'
  }, {
            id: 2,
            country: 'China,Beijing',
            lastText: 'I should buy a boat',
            flag: 'img/China-icon.png'
  }, {
            id: 3,
            country: 'England,London',
            lastText: 'Look at my mukluks!',
            flag: 'img/England-icon.png'
  }, {
            id: 4,
            country: 'Germany,Berlin',
            lastText: 'This is wicked good ice cream.',
            flag: 'img/Germany-icon.png'
  }, {
            id: 5,
            country: 'Japan,Tokyo',
            lastText: 'Look at my mukluks!',
            flag: 'img/Japan-icon.png'
  }, {
            id: 6,
            country: 'UnitedStates,Washington D.C',
            lastText: 'Look at my mukluks!',
            flag: 'img/United-States-of-Americ-icon.png'
  }];

        return {
            all: function () {
                return forecasts;
            },
            remove: function (forecast) {
                forecasts.splice(forecasts.indexOf(forecast), 1);
            },
            get: function (forecastId) {
                for (var i = 0; i < forecasts.length; i++) {
                    if (forecasts[i].id === parseInt(forecastId)) {
                        return forecasts[i];
                    }
                }
                return null;
            }
        };
    });
