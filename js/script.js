var form_title_btn = document.querySelector(".form-title-btn");
var search_form = document.querySelector(".search-form");
var calendar = search_form.querySelectorAll(".icon-calendar");

form_title_btn.addEventListener("click", function(event) {
	event.preventDefault();
	if (search_form.classList.contains("modal-content-show")) {
		search_form.classList.remove("modal-content-show");
		search_form.classList.add("modal-content-hide");
		}	else {
			search_form.classList.add("modal-content-show");
			search_form.classList.remove("modal-content-hide");
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

function modify_adult(val) {
	event.preventDefault();
    var qty = document.getElementById('adult').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('adult').value = new_qty;
    return new_qty;
}

function modify_children(val) {
	event.preventDefault();
    var qty = document.getElementById('children').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('children').value = new_qty;
    return new_qty;
}

