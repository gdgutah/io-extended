var jade = require('jade');
var fs = require('fs');
var _ = require('lodash-node');

var googlePlus = 'https://plus.google.com/111917982940065392922';
var facebook = 'https://www.facebook.com/gdgutdev';

var options = {
  googlePlus: googlePlus,
  facebook: facebook,
  helpers: [
    {
      name: ' GDG Utah',
      url: googlePlus
    }
  ],
  date: {
    full: 'May 3, 2014',
    day: '3',
    month: 'May',
    monthNum: '5',
    year: '2014'
  },
  activities: [
    {
      name: 'Registration',
      startTime: '9:30 AM',
      endTime: '10:00 AM'
    },
    {
      name: 'Keynote',
      speaker: {
        name: 'Aaron Frost',
        url: 'https//plus.google.com/+AaronFrost/about',
        company: {
          name: 'GDG Utah',
          url: 'http://gdgut.com'
        }
      },
      startTime: '10:00 AM',
      endTime: '10:45 AM'
    },
    {
      name: 'For True Beginners',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '11:00 AM',
      endTime: '11:45 AM'
    },
    {
      name: 'Hello Computer: computer basics',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '11:00 AM',
      endTime: '11:45 AM'
    },
    {
      name: 'How to teach your kids to code',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '11:00 AM',
      endTime: '11:45 AM'
    },
    {
      name: 'Angry Birds Hour of Code',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '12:00 AM',
      endTime: '12:45 AM'
    },
    {
      name: 'Getting Kids Involved in Coding',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '12:00 AM',
      endTime: '12:45 AM'
    },
    {
      name: 'Lunch',
      startTime: '1:00 PM',
      endTime: '1:45 PM'
    },
    {
      name: 'Robotics with FIRST Lego League',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'Learning Web Development',
      speaker: {
        name: 'John Woodruff',
        url: 'https://plus.google.com/+JohnWoodruff/about',
        company: {
          name: 'Provo Web Academy',
          url: 'http://provowebacademy.com'
        }
      },
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'Google Glass',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'Family Internet Safety',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'Raspberry Pi Coder',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '3:00 PM',
      endTime: '3:45 PM'
    },
    {
      name: 'Discussion Panel: Mothers in Tech',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      startTime: '3:00 PM',
      endTime: '3:45 PM'
    }
  ],
  prizes: [
    'awesome thing 1',
    'really cool thing 2'
  ],
  swag: [
    'Free lunch',
    'Free Conference T-shirt',
    'As many Raspberry Pi as we can afford to give away'
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
    name: 'UVU, Woodbury School of Business',
    address: '800 W University Pkwy, Orem, UT 84058',
    mapUrl: 'https://maps.google.com/maps?q=40.2769021,-111.7125277&ie=UTF8&t=m&z=17&ll=40.2769021,-111.7125277'
  },
  eventBrightId: '8243355097'
};

_.each(options.activities, function (activity) {
  if (activity.speaker) {
    var simpleSessionName = activity.name.replace(/ |\//g, '-').toLowerCase();
    var simpleName = activity.speaker.name.replace(/ |\//g, '-').toLowerCase();
    var speakerDir = 'activities/sessions/' + simpleSessionName;
    activity.speaker.company.template = fs.readFileSync(speakerDir + '/company.html', 'utf8');
    activity.speaker.sessionTemplate = fs.readFileSync(speakerDir + '/session.html', 'utf8');
    activity.speaker.photo = 'resources/speaker-photos/' + simpleName + '.jpg';
    console.log(activity.speaker.photo);
  }
});

var html = jade.renderFile('index.jade', options);

fs.writeFile('../index.html', html, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('The file was saved!');
  }
});
