var formTitleBtn = document.querySelector(".form-title-btn");
var searchForm = document.querySelector(".search-form");
var calendar = searchForm.querySelectorAll(".icon-calendar");

formTitleBtn.addEventListener("click", function(event) {
	event.preventDefault();
	if (searchForm.classList.contains("modal-content-show")) {
		searchForm.classList.remove("modal-content-show");
		searchForm.classList.add("modal-content-hide");
		}	else {
			searchForm.classList.add("modal-content-show");
			searchForm.classList.remove("modal-content-hide");
		}
});

for (var i = 0; i < calendar.length; i++) {
    calendar[i].addEventListener("click", function(event) {
        event.preventDefault();
        alert("Заглушка");
    });
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 34.751546, lng:  -111.766356},
    zoom: 9,
    disableDefaultUI: true
  });

   var myLatLng = new google.maps.LatLng(34.8697289,-111.7610634);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

searchForm.addEventListener("click", function(event) {
    var target = event.target;

    if (target.tagName != 'BUTTON') return;
   
    event.preventDefault();

    var input = target.parentNode.children[1];
    var value = parseInt(input.value, 10);
    
    if (target.className == "icon-minus") {
        value--;
    } else value++;

    if (value < 0) {
        value = 0;
    }
    
    input.value = value;   
});
