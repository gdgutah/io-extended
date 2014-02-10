var jade = require('jade');
var fs = require('fs');
var _ = require('lodash-node');

var googlePlus = 'https://plus.google.com/111917982940065392922';

var options = {
  googlePlus: googlePlus,
  helpers: [
    {
      name: 'Google Developer Group, Utah',
      url: googlePlus
    }
  ],
  days: [
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
          startTime: '8:00 AM',
          endTime: '8:50 AM'
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
          startTime: '9:00 AM',
          endTime: '9:50 AM'
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
          startTime: '10:00 AM',
          endTime: '10:50 AM'
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
          startTime: '11:00 AM',
          endTime: '11:50 AM'
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
          startTime: '8:00 AM',
          endTime: '8:50 AM'
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
          startTime: '9:00 AM',
          endTime: '9:50 AM'
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
          startTime: '10:00 AM',
          endTime: '10:50 AM'
        }
      ]
    }
  ],
  prizes: [
    'awesome thing 1',
    'really cool thing 2'
  ],
  swag: [
    'rad thing 1',
    'sweet thing 2'
  ],
  sponsors: [
    {
      name: 'Google',
      url: 'http://www.google.com'
    }
  ],
  hotels: [
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
  ],
  location: {
    state: 'Utah',
    city: 'Orem',
    name: 'Location Name',
    address: 'Location Address...',
    mapUrl: 'https://maps.google.com/maps?q=46.8626878,-113.9848835&ie=UTF8&t=m&z=16&ll=46.8626878,-113.9848835'
  },
  eventBrightId: '8243355097'
};

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
_.each(options.days, function(day) {
  var d = day.date;
  day.day = d.getDate();
  day.month = d.getMonth() + 1; //Months are zero based
  day.year = d.getFullYear();
  day.fullDate = day.year + '-' + day.month + '-' + day.day;
  day.monthName = monthNames[d.getMonth()];
  day.simpleDate = day.monthName + ' ' + day.day + ', ' + day.year;
  _.each(day.activities, function(activity) {
    if (activity.isSession) {
      var simpleName = activity.speaker.name.replace(/ |\//g, '-').toLowerCase();
      var speakerDir = 'activities/sessions/' + simpleName;
      activity.speaker.company.template = fs.readFileSync(speakerDir + '/company.html', 'utf8');
      activity.speaker.sessionTemplate = fs.readFileSync(speakerDir + '/session.html', 'utf8');
      activity.speaker.photo = 'resources/speaker-photos/' + simpleName + '.jpg';
    }
  });
});

var html = jade.renderFile('index.jade', options);

fs.writeFile('../index.html', html, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('The file was saved!');
  }
}); 