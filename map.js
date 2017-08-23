<script>
			function myMap() {
			  var myCenter = new google.maps.LatLng(-31.8704969,115.9455807);
			  var mapCanvas = document.getElementById("map");
			  var mapOptions = {center: myCenter, zoom: 5};
			  var map = new google.maps.Map(mapCanvas, mapOptions);
			  var marker = new google.maps.Marker({position:myCenter});
			  marker.setMap(map);
			}
			</script>

			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADqvaoKgOQp62zQ69AJQFZKD8lINlsaoU&callback=myMap"></script>