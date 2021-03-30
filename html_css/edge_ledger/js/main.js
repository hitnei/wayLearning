let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 16.466645, lng: 107.590626 },
    zoom: 16,
  });
}

// smooth scroll
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault()
        const hash = this.hash

        $( "html, body" ).animate({
            scrollTop: $(hash).offset().top - 75
          }, 500);
    }
})

// sticky menu bg
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        $('#navbar').css('opacity', 0.9)
    } else {
        $('#navbar').css('opacity', 1)
    }
})