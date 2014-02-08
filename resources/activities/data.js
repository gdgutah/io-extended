angular.module('dff').constant('days', (function() {
  function getTime(time) {
    var d = new Date();
    var t = time.split(':');
    var h = parseInt(t[0]);
    var m = t.length > 1 ? parseInt(t[1]) : 0;
    d.setHours(h);
    d.setMinutes(m);
    return d;
  }
  var days = [
    {
      name: 'Day 1',
      date: new Date('2014-05-17'),
      activities: [
        {
          isSession: true,
          speaker: {
            name: 'Robotics Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Robotics Company',
              url: 'http://www.google.com'
            }
          },
          name: 'Cool Robotics!',
          startTime: getTime('8'),
          endTime: getTime('8:50')
        },
        {
          isSession: true,
          speaker: {
            name: 'Google Glass Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Google Glass',
          startTime: getTime('9'),
          endTime: getTime('9:50')
        },
        {
          isSession: true,
          speaker: {
            name: 'Social Media Safety Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Social Media Safety',
          startTime: getTime('10'),
          endTime: getTime('10:50')
        },
        {
          isSession: true,
          speaker: {
            name: 'Coding Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Coding',
          startTime: getTime('11'),
          endTime: getTime('11:50')
        }
      ]
    },
    {
      name: 'Day 2',
      date: new Date('2014-05-18'),
      activities: [
        {
          isSession: true,
          speaker: {
            name: 'Write your first android app Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Write your first android app',
          startTime: getTime('8'),
          endTime: getTime('8:50')
        },
        {
          isSession: true,
          speaker: {
            name: 'Women in tech/coding Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Women in tech/coding',
          startTime: getTime('9'),
          endTime: getTime('9:50')
        },
        {
          isSession: true,
          speaker: {
            name: 'Coding Exhibit Hall Speaker',
            url: 'http://plus.google.com/',
            company: {
              name: 'Example Company',
              url: 'http://www.example.com'
            }
          },
          name: 'Coding Exhibit Hall',
          startTime: getTime('10'),
          endTime: getTime('10:50')
        }
      ]
    }
  ];

  angular.forEach(days, function(day) {
    angular.forEach(day.activities, function(activity) {
      if (activity.isSession) {
        activity.speaker.path = 'resources/activities/sessions/' + activity.speaker.name.replace(/ |\//g, '-').toLowerCase();
      }
    });
  });
  return days;
})());