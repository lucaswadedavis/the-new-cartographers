$(document).ready(function(){
	view.init();
	view.listeners();
});


view={
	
	listeners:function(){
		$("td#pois").live("click",function(){
		model.mapColors.poi="#ffeeee";
		view.map();
		console.log("did it work?");
		});
	},


	init:function(){

	
	var d="";
	d+="<table><tr>";
	d+="<td>roads</td>";
	d+="<td>landscape</td>";
	d+="<td>administration</td>";
	d+="<td id='pois' class='button'>pois</td>";
	d+="</tr><table>";
	$("div#wrapper").html(d);
	
	view.map();
	},
	
	map:function(){
  	var transit=model.mapColors.transit;
  	var admin=model.mapColors.admin;
  	var poi=model.mapColors.poi;
  	var land=model.mapColors.land;
  	// Create an array of styles.
  	var styles = [
    		{
      		stylers: [
        		{ saturation: 0 }
      		]
    		},
		{
		featureType:"transit",
		elementType:"geometry.fill",
		stylers:[
	{color:transit}
	]
	},{
	featureType:"administrative",
	elementType:"geometry.fill",
	stylers:[
	{color:admin}
	]
	},{
	featureType:"landscape",
	elementType:"geometry.fill",
	stylers:[
	{color:land}
	]
	},{
	featureType:"poi",
	elementType:"geometry.fill",
	stylers:[
	{color:poi}
	]
	},{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100},
        { visibility: "simplified" }
      ]
    },{
      featureType: "all",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        { color:"#000000" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(47.6740, -122.2882),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

	}
};
