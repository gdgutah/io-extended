(function() {
  var app = angular.module('dff', []);

  app.controller('MainCtrl', function($scope, days, $location, $anchorScroll) {

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.days = days;

    $scope.googlePlus = 'https://plus.google.com/111917982940065392922';
    $scope.showMap = false;
    $scope.mediaQueryCallback = function (matches) {
      $scope.showMap = matches;
    };

    $scope.helpers = [
      {
        name: 'Google Developer Group, Utah',
        url: $scope.googlePlus
      }
    ];

    $scope.prizes = [
      'awesome thing 1',
      'really cool thing 2'
    ];

    $scope.swag = [
      'rad thing 1',
      'sweet thing 2'
    ];

    $scope.sponsors = [
      {
        name: 'Google',
        url: 'http://www.google.com'
      }
    ];

    $scope.hotels = [
      {
        name: 'Hotel Name',
        address: {
          street: 'Street address',
          city: 'City address',
          state: 'Utah',
          zip: 'Zip'
        },
        phoneNumber: '123-456-7890',
        fax: '098-765-4321',
        bookLink: 'http://www.google.com',
        bookText: 'Book a room'
      }
    ];

    $scope.location = {
      state: 'Utah',
      city: 'Orem',
      name: 'Location Name',
      address: 'Location Address...',
      embedUrl: '',
      linkUrl: ''
    };
  });

  app.directive('mediaQueryCallback', function() {
    return {
      scope: {
        query: '@',
        mediaQueryCallback: '&'
      },
      link: function(scope) {
        var mediaQuery = window.matchMedia(scope.query);
        mediaQuery.addListener(function() {
          scope.mediaQueryCallback({matches: mediaQuery.matches});
          console.log('calling media query callback');
        });
        scope.mediaQueryCallback({matches: mediaQuery.matches});
      }
    }
  });
})();