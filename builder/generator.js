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
      name: 'So You Think You Want to Write Code?',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Kids',
      startTime: '11:00 AM',
      endTime: '11:45 AM'
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
      track: 'Beginner',
      startTime: '11:00 PM',
      endTime: '11:45 PM'
    },
    {
      name: 'Scratch Programming for Beginners',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Beginner',
      startTime: '11:00 AM',
      endTime: '11:45 AM'
    },
    {
      name: 'Layers of Internet Safety',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Non Programmer',
      startTime: '11:00 PM',
      endTime: '11:45 PM'
    },
    {
      name: 'Teaching Toddlers Programming',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Kids',
      startTime: '12:00 AM',
      endTime: '12:45 AM'
    },
    {
      name: 'Javascript as Your First Language',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Beginner',
      startTime: '12:00 PM',
      endTime: '12:45 PM'
    },
    {
      name: 'How to Get Kids Interested in Programming',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Non Programmer',
      startTime: '12:00 PM',
      endTime: '12:45 PM'
    },
    {
      name: 'Learning Programming with Kahn Academy for Kids',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Kids',
      startTime: '12:00 AM',
      endTime: '12:45 AM'
    },
    {
      name: 'Lunch',
      startTime: '1:00 PM',
      endTime: '1:45 PM'
    },
    {
      name: 'Arduino Autonomous Vehicle',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Beginner',
      startTime: '2:00 AM',
      endTime: '2:45 AM'
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
      track: 'Kids',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
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
      track: 'Beginner',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: "Blogging: The How To's",
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Non Programmer',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'How to "Hack" the Web',
      speaker: {
        name: 'Cahlan Sharp',
        url: '#',
        company: {
          name: 'DevMountain',
          url: 'https://devmounta.in/'
        }
      },
      track: 'Beginner',
      startTime: '2:00 PM',
      endTime: '2:45 PM'
    },
    {
      name: 'Learning Programming with Kahn Academy',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Beginner',
      startTime: '3:00 AM',
      endTime: '3:45 AM'
    },
    {
      name: 'Websites for Smarties',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Beginner',
      startTime: '3:00 AM',
      endTime: '3:45 AM'
    },
    {
      name: 'Google Blockly: Visually Programming',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'Kids',
      startTime: '3:00 AM',
      endTime: '3:45 AM'
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
      track: 'Non Programmer',
      startTime: '3:00 PM',
      endTime: '3:45 PM'
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
      track: 'All Day',
      startTime: '',
      endTime: ''
    },
    {
      name: 'Rockets',
      speaker: {
        name: 'TBD',
        url: '#',
        company: {
          name: '',
          url: '#'
        }
      },
      track: 'All Day',
      startTime: '',
      endTime: ''
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
      level: 'platinum',
      image: 'resources/sponsor-logos/dojologo.png'
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
      level: 'silver',
      image: 'resources/sponsor-logos/pwalogo.png'
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

options.tracks = {};

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

  // Configure tracks
  if (!activity.track) {
    if (!options.tracks['General Events']) {
      options.tracks['General Events'] = {};
      options.tracks['General Events'].name = 'General Events';
      options.tracks['General Events'].track = [];
    }
    options.tracks['General Events'].track.push(activity);
  } else {
    if (!options.tracks[activity.track]) {
      options.tracks[activity.track] = {};
      options.tracks[activity.track].name = activity.track;
      options.tracks[activity.track].track = [];
    }
    options.tracks[activity.track].track.push(activity);
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
