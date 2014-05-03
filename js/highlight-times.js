(function() {
  'use strict';
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  if (now.getDate() !== DFF.eventDate.getDate() ||
    now.getMonth() !== DFF.eventDate.getMonth() ||
    now.getFullYear() !== DFF.eventDate.getFullYear()) {
    var happeningNow = document.querySelector('.happening-now-note');
    if (happeningNow.parentNode) {
      happeningNow.parentNode.removeChild(happeningNow);
    }
    return;
  }


  var allDayActivities = document.querySelectorAll('.all-day');
  each(allDayActivities, function(allDayNode) {
    addClass(allDayNode, 'current-time-arrow');
  });

  function updateCurrentTimeArrows() {
    var currentEpoch = new Date().getTime();
    var allActivities = document.querySelectorAll('.activity');
    each(allActivities, function(activityNode) {
      removeClass(activityNode, 'current-time-arrow');

      // add again if it's in range
      var startNode = activityNode.querySelector('.start-time');
      var endNode = activityNode.querySelector('.end-time');
      if (!startNode || !endNode) {
        return;
      }
      var startDate = createDateForActivity(startNode.innerText);
      var endDate = createDateForActivity(endNode.innerText);
      if (!startDate || !endDate) {
        return;
      }
      if (currentEpoch > startDate.getTime() &&
        currentEpoch < endDate.getTime()) {
        addClass(activityNode, 'current-time-arrow');
      }
    });
  }
  updateCurrentTimeArrows();

  setTimeout(updateCurrentTimeArrows, 1000*60);

  // FUNCTIONS
  function each(array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i], i, array) === true) {
        return;
      }
    }
  }

  function createDateForActivity(time) {
    if (!time) {
      return;
    }
    var hour = '1';
    var minute = '0';
    var col = time.indexOf(':');
    var space = time.indexOf(' ');
    if (col !== -1) {
      hour = time.substring(0, col);
      minute = time.substring(col + 1);
      space = minute.indexOf(' ');
      if (space !== -1) {
        minute = minute.substring(0, space);
      }
    } else {
      hour = time.substring(0, space);
    }
    if (/PM/.test(time)) {
      hour = ~~hour + 12;
    }
    return new Date(year, month, day, hour, minute, 0, 0);
  }

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }


})();