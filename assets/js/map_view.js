
var positions = [{position : {lat: 23.146304, lng: -82.359272}},{position : {lat: 23.139570, lng: -82.353219}}, {position : {lat: 23.141358, lng: -82.356071}},{position : {lat: 40.442820, lng: -79.943047}}];
var contents = [
     {content:  
        " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>",
      maxWidth: 10000}, 
     {content:  
        " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>",
      maxWidth: 10000},
     {content:  
        " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>",
      maxWidth: 10000 },
      {content:  
        " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>",
      maxWidth: 10000 }
      ]

$(document).ready(function() {
  var store = JSON.parse(localStorage.getItem("store"));
  if (store === null) {
    store = ["map-view", "list-view"];
    view = "map-view";
  } else {
    view = store[0];
  }

  // initialize the view by remembering user's previous choice
  $("#"+view).show();
  $("#"+store[1]).hide();


  // $('#map')
  //   .gmap3({
  //     center: {lat: 23.139570, lng: -82.353219},
  //     zoom: 14,
  //     mapTypeId : google.maps.MapTypeId.ROADMAP,
  //     styles: [
  //       {
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#f5f5f5"
  //           }
  //         ]
  //       },
  //       {
  //         "elementType": "labels.icon",
  //         "stylers": [
  //           {
  //             "visibility": "off"
  //           }
  //         ]
  //       },
  //       {
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#616161"
  //           }
  //         ]
  //       },
  //       {
  //         "elementType": "labels.text.stroke",
  //         "stylers": [
  //           {
  //             "color": "#f5f5f5"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "administrative.land_parcel",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#bdbdbd"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "poi",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#eeeeee"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "poi",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#757575"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "poi.park",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#e5e5e5"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "poi.park",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#9e9e9e"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "road",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#ffffff"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "road.arterial",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#757575"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "road.highway",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#dadada"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "road.highway",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#616161"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "road.local",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#9e9e9e"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "transit.line",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#e5e5e5"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "transit.station",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#eeeeee"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "water",
  //         "elementType": "geometry",
  //         "stylers": [
  //           {
  //             "color": "#c9c9c9"
  //           }
  //         ]
  //       },
  //       {
  //         "featureType": "water",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //           {
  //             "color": "#9e9e9e"
  //           }
  //         ]
  //       }
  //     ]
  //   })
    
  //   .marker(positions)
   
  //   .infowindow(contents)
   
  //   .then(function (infowindow) {
  //     var map = this.get(0);
  //     var marker = this.get(1)[1];
  //     // for (var i = 0; i < 4; i++) {
  //     //   var curMarker = marker[i];
  //     //   var curContent = contents[i];
  //       marker.addListener('click', function() {
  //         console.log(infowindow);
  //         infowindow.open(map, marker);
  //       });        
  //     //}

  //     // var infowindow = new google.maps.InfoWindow({
  //     //     content: contentString
  //     // });

  //   });


  var locations = [
    [ " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>", 
      23.146304,-82.359272],
    [ " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>", 
      23.139570, -82.353219],
    [ " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>",
      23.141358, -82.356071],
    [ " <div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"assets/img/01.jpeg\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"russian.html\">Russian Food</a></h4><p class=\"card-text\">Lorem ip.</p></div></div>", 
      40.442820, -79.943047],
    ];


  function initialize() {

    var myOptions = {
      center: new google.maps.LatLng(23.146304, -82.353219),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

    setMarkers(map,locations)

  }



  function setMarkers(map,locations){

    var marker, i

    for (i = 0; i < locations.length; i++){  

      var html = locations[i][0]
      var lat = locations[i][1]
      var long = locations[i][2]


      latlngset = new google.maps.LatLng(lat, long);

      var marker = new google.maps.Marker({  
              map: map, position: latlngset  
            });
            map.setCenter(marker.getPosition())


      var content = html;    

      var infowindow = new google.maps.InfoWindow()

      google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
              return function() {
                 infowindow.setContent(content);
                 infowindow.open(map,marker);
              };
      })(marker,content,infowindow)); 

      }
    }
  
  //initialize the map
  initialize();

  // change view
  $("#map-list").on('click',function() {
      $("#map-view").hide(); 
      $("#list-view").show();
  });

  $("#list-map").on('click',function() {
      $("#list-view").hide(); 
      $("#map-view").show();
  });


});












