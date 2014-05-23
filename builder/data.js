module.exports = function() {
  var twitterHandle = 'gdgutah';
  var googlePlus = 'https://plus.google.com/+Gdgut';

  var data = {
    social: {
      googlePlus: googlePlus,
      facebook: 'https://www.facebook.com/gdgutdev',
      twitter: 'https://twitter.com/' + twitterHandle,
      twitterHandle: twitterHandle,
      hashtag: 'io14extended'
    },
    baseUrl: 'http://gdgut.com',
    gdgGroupName: 'GDG Utah',
    helpers: [
      {
        name: ' GDG Utah',
        url: googlePlus
      }
    ],
    date: {
      full: 'June 25 - 26, 2014',
      day: '25',
      month: 'June',
      monthNum: '6',
      year: '2014'
    },
    prizes: [
      'Chromebooks',
      'Google Watches',
      'Whatever else we can get'
    ],
    swag: [
      'Google I/O Extended Hoodies',
      'Free lunch both days',
      'Snacks'
    ],
    sponsors: [
      {
        name: 'AtTask',
        url: 'http://www.attask.com',
        image: 'resources/sponsor-logos/attasklogo.png',
        level: 'platinum'
      },
      {
        name: 'Domo',
        url: 'http://www.domo.com/',
        level: 'platinum',
        image: 'resources/sponsor-logos/domologo.png'
      }
    ],
    location: {
      state: 'Utah',
      city: 'Salt Lake City',
      name: 'Neumont University',
      address: '143 S Main St, Salt Lake City, UT 84111',
      mapUrl: 'https://www.google.com/maps/place/Neumont+University/@40.766112,-111.890576,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x984de330faa39cd6',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.8141593866076!2d-111.890576!3d40.766112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x984de330faa39cd6!2sNeumont+University!5e0!3m2!1sen!2sus!4v1400809830688'
    },
    eventBrightId: 'TODO',
    analytics: {
      trackingId: 'UA-51273424-1',
      url: 'gdgut.com'
    }
  };

  data.location.cityState = data.location.city + ', ' + data.location.state;
  data.fullName = 'Google I/O Extended ' + data.location.cityState;

  data.contentText = {
    top: [
      data.fullName + ' is a place where developers and Google fans can get together and geek out for two days',
      'about all the cool things happening at Google I/O. It\'s going to be a good time. Tickets are limited and',
      'will go fast so make sure to pick up yours asap!'
    ].join(' '),
    whyAttend: [
      'I/O Extended includes live streaming sessions and a hackathon. This event is brought to you by our local',
      'Google Developer Group and made possible by <a href="#sponsors">the sponsors</a>.'
    ].join(' ')
  };

  return data;
};