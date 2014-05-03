(function() {
  var mediaQuery = window.matchMedia("(min-width: 750px)");
  var mediaQueryCallback = function () {
    var map = document.getElementById('location-map-embed');
    var link = document.getElementById('location-map-link');
    if (mediaQuery.matches) {
      map.className = '';
      link.className = 'hide';
    } else {
      link.className = '';
      map.className = 'hide';
    }
  };
  mediaQuery.addListener(mediaQueryCallback);
  mediaQueryCallback();
})();
