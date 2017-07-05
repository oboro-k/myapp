angular.module('starter.services', [])

    .factory('forecasts', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var forecasts = [{
            id: 0,
            country: 'Australia,Sydney',
            lastText: "It's clear all day !",
            flag: 'img/Australia-icon.png',
            weather: 'img/weathericon/sunny-outline.png'
  }, {
            id: 1,
            country: 'Brazil,Brasilia',
            lastText: "It's heavy rain in the morning",
            flag: 'img/Brazil-icon.png',
            weather: 'img/weathericon/rainy-outline.png'
  }, {
            id: 2,
            country: 'China,Beijing',
            lastText: "It's terrible thunderstorm",
            flag: 'img/China-icon.png',
            weather: 'img/weathericon/thunderstorm-outline.png'
  }, {
            id: 3,
            country: 'United-Kingdom,London',
            lastText: "It's rain all days",
            flag: 'img/United-Kingdom-icon.png',
            weather: 'img/weathericon/rainy-outline.png'
  }, {
            id: 4,
            country: 'Germany,Berlin',
            lastText: "It's cloudy at night",
            flag: 'img/Germany-icon.png',
            weather: 'img/weathericon/cloudy-night-outline.png'
  }, {
            id: 5,
            country: 'Japan,Tokyo',
            lastText: "It's clear all day !",
            flag: 'img/Japan-icon.png',
            weather: 'img/weathericon/sunny-outline.png'
  }, {
            id: 6,
            country: 'UnitedStates,Washington D.C',
            lastText: "It's partly sunny all day !",
            flag: 'img/United-States-of-America-icon.png',
            weather: 'img/weathericon/partlysunny-outline.png'
    }, {
            id: 7,
            country: 'Russia,moscow',
            lastText: "It's beautiful moon !",
            flag: 'img/Russian-federation-icon.png',
            weather: 'img/weathericon/moon-outline.png'
        }, {
            id: 8,
            country: 'France,Paris',
            lastText: "It's partly sunny all day !",
            flag: 'img/France-icon.png',
            weather: 'img/weathericon/partlysunny-outline.png'
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
