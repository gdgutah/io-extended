module.exports = function() {
  console.log('in data');

  var googlePlus = 'https://plus.google.com/+Gdgut';
  var facebook = 'https://www.facebook.com/gdgutdev';
  var twitter = 'https://twitter.com/gdgutah';
  var baseUrl = 'http://gdgut.com';

  return {
    googlePlus: googlePlus,
    facebook: facebook,
    twitter: twitter,
    baseUrl: baseUrl,
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

};