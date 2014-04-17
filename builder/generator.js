var jade = require('jade');
var fs = require('fs');
var _ = require('lodash-node');

var googlePlus = 'https://plus.google.com/111917982940065392922';

var options = {
  googlePlus: googlePlus,
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
      startTime: '7:30 AM',
      endTime: '8:00 AM'
    },
    {
      name: 'Cool Robotics!',
      speaker: {
        name: 'Robotics Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Robotics Company',
          url: 'http://www.google.com'
        }
      },
      startTime: '8:00 AM',
      endTime: '8:50 AM'
    },
    {
      name: 'Google Glass',
      speaker: {
        name: 'Google Glass Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '9:00 AM',
      endTime: '9:50 AM'
    },
    {
      name: 'Social Media Safety',
      speaker: {
        name: 'Social Media Safety Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '10:00 AM',
      endTime: '10:50 AM'
    },
    {
      name: 'Coding',
      speaker: {
        name: 'Coding Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '11:00 AM',
      endTime: '11:50 AM'
    },
    {
      name: 'Write your first android app',
      speaker: {
        name: 'Write your first android app Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '8:00 AM',
      endTime: '8:50 AM'
    },
    {
      name: 'Women in tech/coding',
      speaker: {
        name: 'Women in tech/coding Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '9:00 AM',
      endTime: '9:50 AM'
    },
    {
      name: 'Coding Exhibit Hall',
      speaker: {
        name: 'Coding Exhibit Hall Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '10:00 AM',
      endTime: '10:50 AM'
    },
    {
      name: 'Write your first android app',
      speaker: {
        name: 'Write your first android app Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '8:00 AM',
      endTime: '8:50 AM'
    },
    {
      name: 'Women in tech/coding',
      speaker: {
        name: 'Women in tech/coding Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '9:00 AM',
      endTime: '9:50 AM'
    },
    {
      name: 'Coding Exhibit Hall',
      speaker: {
        name: 'Coding Exhibit Hall Speaker',
        url: 'http://plus.google.com/',
        company: {
          name: 'Example Company',
          url: 'http://www.example.com'
        }
      },
      startTime: '10:00 AM',
      endTime: '10:50 AM'
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
      name: 'BlueHost',
      url: 'http://www.bluehost.com',
      image: 'resources/sponsor-logos/bluehostlogo.png',
      level: 'premier'
    },
    {
      name: 'Google Fiber',
      url: 'https://fiber.google.com/about/',
      level: 'platinum',
      image: 'resources/sponsor-logos/fiberlogo.png'
    },
    {
      name: 'AtTask',
      url: 'http://www.attask.com',
      image: 'resources/sponsor-logos/attasklogo.png',
      level: 'platinum'
    },
    {
      name: 'DojoDevCamp',
      url: 'http://dojodevcamp.com/',
      level: 'platinum'
    },
    {
      name: 'DevMountain',
      url: 'http://devmounta.in/',
      level: 'gold',
      image: 'resources/sponsor-logos/devmtnlogo.png'
    },
    {
      name: 'Plural Sight',
      url: 'http://www.pluralsight.com/',
      level: 'gold',
      image: 'resources/sponsor-logos/pluralsightlogo.png'
    },
    {
      name: 'Provo Web Academy',
      url: 'http://provowebacademy.com/',
      level: 'silver'
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
    var simpleName = activity.speaker.name.replace(/ |\//g, '-').toLowerCase();
    var speakerDir = 'activities/sessions/' + simpleName;
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