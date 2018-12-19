//var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  var mapPosition = "https://map.openchargemap.io/?mode=embedded&distanceunit=km&latitude="+ lat + "&longitude=" + long
    //document.getElementById("mapDiv").innerHTML = "<iframe src='"+mapPosition+"'width='100%' height='800px'></iframe>" 
    alert(mapPosition)
}

