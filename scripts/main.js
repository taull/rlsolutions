//jQuery is required to run this code
$( document ).ready(function() {


      scaleVideoContainer();

      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');

      $(window).on('resize', function() {
          scaleVideoContainer();
          scaleBannerVideoSize('.video-container .poster img');
          scaleBannerVideoSize('.video-container .filter');
          scaleBannerVideoSize('.video-container video');
      });

    // On Load

    $('#thanks').css('opacity', 0);
    $('#banner').css('opacity', 0);

    $(window).load(function() {
        $('.loading-overlay').addClass('opacity-0');

        setTimeout(function(){
          $('#thanks').addClass('fadeInUp');
        },500);

        setTimeout(function(){
          $('#banner').addClass('fadeInUp');
          $('body').removeClass('unscrollable');

        },500);

    });

    // Team Animation Slideout

    $('#team-trigger-1').on('click', function() {
        $('#team-link-1').toggleClass('team-link-shift');
        $('#team-trigger-1').toggleClass('team-trigger-shift');
        $('#team-contact-1').toggleClass('team-contact-shift');
    });

    $('#team-trigger-2').on('click', function() {
        $('#team-link-2').toggleClass('team-link-shift');
        $('#team-trigger-2').toggleClass('team-trigger-shift');
        $('#team-contact-2').toggleClass('team-contact-shift');
    });

    $('#team-trigger-3').on('click', function() {
        $('#team-link-3').toggleClass('team-link-shift');
        $('#team-trigger-3').toggleClass('team-trigger-shift');
        $('#team-contact-3').toggleClass('team-contact-shift');
    });

    $('#team-trigger-4').on('click', function() {
        $('#team-link-4').toggleClass('team-link-shift');
        $('#team-trigger-4').toggleClass('team-trigger-shift');
        $('#team-contact-4').toggleClass('team-contact-shift');
    });

    $('#team-trigger-5').on('click', function() {
        $('#team-link-5').toggleClass('team-link-shift');
        $('#team-trigger-5').toggleClass('team-trigger-shift');
        $('#team-contact-5').toggleClass('team-contact-shift');
    });

    $('#team-trigger-6').on('click', function() {
        $('#team-link-6').toggleClass('team-link-shift');
        $('#team-trigger-6').toggleClass('team-trigger-shift');
        $('#team-contact-6').toggleClass('team-contact-shift');
    });
    $('#team-trigger-7').on('click', function() {
        $('#team-link-7').toggleClass('team-link-shift');
        $('#team-trigger-7').toggleClass('team-trigger-shift');
        $('#team-contact-7').toggleClass('team-contact-shift');
    });

    $('#team-trigger-8').on('click', function() {
        $('#team-link-8').toggleClass('team-link-shift');
        $('#team-trigger-8').toggleClass('team-trigger-shift');
        $('#team-contact-8').toggleClass('team-contact-shift');
    });

    $('#team-trigger-9').on('click', function() {
        $('#team-link-9').toggleClass('team-link-shift');
        $('#team-trigger-9').toggleClass('team-trigger-shift');
        $('#team-contact-9').toggleClass('team-contact-shift');
    });

    $('#team-trigger-10').on('click', function() {
        $('#team-link-10').toggleClass('team-link-shift');
        $('#team-trigger-10').toggleClass('team-trigger-shift');
        $('#team-contact-10').toggleClass('team-contact-shift');
    });

    $('#team-trigger-11').on('click', function() {
        $('#team-link-11').toggleClass('team-link-shift');
        $('#team-trigger-11').toggleClass('team-trigger-shift');
        $('#team-contact-11').toggleClass('team-contact-shift');
    });

    $('#team-trigger-12').on('click', function() {
        $('#team-link-12').toggleClass('team-link-shift');
        $('#team-trigger-12').toggleClass('team-trigger-shift');
        $('#team-contact-12').toggleClass('team-contact-shift');
    });

    $('#team-trigger-13').on('click', function() {
        $('#team-link-13').toggleClass('team-link-shift');
        $('#team-trigger-13').toggleClass('team-trigger-shift');
        $('#team-contact-13').toggleClass('team-contact-shift');
    });

    // Menu Slideout

    $('#slideout-trigger').on('click', function() {
      $('.menu-slideout').toggleClass('menu-shift');
    });

    $('#slideout-close').on('click', function() {
      $('.menu-slideout').toggleClass('menu-shift');
    });

    var waypoint = new Waypoint({
      element: document.getElementById('numbers'),
      handler: function(direction) {

        $('.shipment-counter').countTo({
            from: 0,
            to: 124,
            speed: 1000,
            refreshInterval: 50,
        });

        $('.staff-counter').countTo({
            from: 0,
            to: 12,
            speed: 1000,
            refreshInterval: 50,
        });

        $('.customer-counter').countTo({
            from: 0,
            to: 83,
            speed: 1000,
            refreshInterval: 50,
        });

        $('.project-counter').countTo({
            from: 0,
            to: 256,
            speed: 1000,
            refreshInterval: 50,
        });

      },
      offset: 'bottom-in-view' 
    })




    // Waypoints Opacity

    $('#services-1').css('opacity', 0);
    $('#services-2').css('opacity', 0);
    $('#services-3').css('opacity', 0);
    $('#services-4').css('opacity', 0);

    $('#user-percentage1').css('opacity', 0);
    $('#user-percentage2').css('opacity', 0);
    $('#user-percentage3').css('opacity', 0);
    
    // Services Waypoints

    var waypoint = new Waypoint({
      element: document.getElementById('services-1'),
      handler: function(direction) {
        $('#services-1').addClass('fadeIn');

      },
      offset: 'bottom-in-view' 
    })

    var waypoint = new Waypoint({
      element: document.getElementById('services-2'),
      handler: function(direction) {
        $('#services-2').addClass('fadeIn');
      },
      offset: 'bottom-in-view' 
    })

    var waypoint = new Waypoint({
      element: document.getElementById('services-3'),
      handler: function(direction) {
        $('#services-3').addClass('fadeIn');
      },
      offset: 'bottom-in-view' 
    })

    var waypoint = new Waypoint({
      element: document.getElementById('services-4'),
      handler: function(direction) {
        $('#services-4').addClass('fadeIn');
      },
      offset: 'bottom-in-view' 
    })

    // User Progress

    var waypoint = new Waypoint({
      element: document.getElementById('user-percentage1'),
      handler: function(down) {

        $('#user-percentage1').addClass('fadeIn');

        var bar8 = new ProgressBar.Circle(userProgress1, {
          color: '#f0f0f0',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 3,
          trailWidth: 3,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#E64A19', width: 3 },
          to: { color: '#FF7043', width: 3 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar8.text.style.fontSize = '0';
        bar8.text.style.fontWeight = '400';


        bar8.animate(1);  // Number from 0.0 to 1.0  
        this.destroy()
        }, offset: 'bottom-in-view'  

    })

    var waypoint = new Waypoint({
      element: document.getElementById('user-percentage2'),
      handler: function(down) {

        $('#user-percentage2').addClass('fadeIn');

        var bar9 = new ProgressBar.Circle(userProgress2, {
          color: '#f0f0f0',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 5,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#E64A19', width: 5 },
          to: { color: '#FF7043', width: 5 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar9.text.style.fontSize = '5rem';
        bar9.text.style.fontWeight = '400';


        bar9.animate(.88);  // Number from 0.0 to 1.0  
        this.destroy()
        }, offset: 'bottom-in-view'  

    })

    var waypoint = new Waypoint({
      element: document.getElementById('user-percentage3'),
      handler: function(down) {

        $('#user-percentage3').addClass('fadeIn');

        var bar9 = new ProgressBar.Circle(userProgress3, {
          color: '#f0f0f0',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 5,
          trailWidth: 5,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#FFC400', width: 5 },
          to: { color: '#EF5350', width: 5 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar9.text.style.fontSize = '5rem';
        bar9.text.style.fontWeight = '400';


        bar9.animate(.56);  // Number from 0.0 to 1.0  
        this.destroy()
        }, offset: 'bottom-in-view'  

    })



});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}


// Google Maps

function initMap() {

  // Specify features and elements to define styles.
  var styleArray = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }

  ];


  var myLatlng = new google.maps.LatLng(34.019236,-81.001482);
  var mapOptions = {
    zoom: 16,
    center: myLatlng, 
    styles: styleArray,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}



