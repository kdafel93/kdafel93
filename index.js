//get reference to the form and search input 

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const suggestedMenu = document.getElementById('suggested-menu');
const suggestedOptions = document.getElementById('suggested-options');


searchForm.addEventListener("submit", function(event) {
    event.preventDefault()


const searchValue =  searchInput.value.toLowerCase()

const locations = {
    "cape town" : "explore/places/capeTown/cpt.html",
    "franschhoek": "explore/places/franschhoek/frans.html",
    "george": "explore/places/george/geo.html",
    "hermanus": "explore/places/hermanus/herman.html",
    "knysna" : "explore/places/knysna/kny.html",
    "langebaan" : "explore/places/langebaan/lang.html",
    "mossel Bay" : "explore/places/mosselBay/mb.html",
    "oudtshoorn" : "explore/places/oudt/oudt.html", 
    "paarl" : "explore/places/paarl/paarl.html", 
    "stellenbosch" : "explore/places/stellenbosch/stel.html", 
    "somerset west" : "explore/places/somerset/somer.html"
}


if(locations.hasOwnProperty(searchValue)) {
    const pageUrl = locations[searchValue]
    window.location.href = pageUrl
}
else{
    alert("Location not found")
}


})

  
