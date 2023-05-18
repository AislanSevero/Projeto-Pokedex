var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var cardList = document.getElementById("cardList");
var searchResult = document.getElementById("searchResult");

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    performSearch();
  }
});

searchButton.addEventListener("mouseover", function() {
	searchButton.classList.add("cursor-pointer");
  });
  
  searchButton.addEventListener("mouseout", function() {
	searchButton.classList.remove("cursor-pointer");
  });

function performSearch() {
  var searchTerm = searchInput.value.toLowerCase();
  var cards = cardList.getElementsByClassName("cartao-pokemon");

  for (var i = 0; i < cards.length; i++) {
    var cardName = cards[i].querySelector(".informacoes span:first-child").textContent.toLowerCase();
    if (cardName.includes(searchTerm)) {
      cards[i].classList.remove("hidden");
    } else {
      cards[i].classList.add("hidden");
    }
  }

  displaySearchResult();
}

function displaySearchResult() {
  searchResult.innerHTML = "";

  var visibleCards = cardList.getElementsByClassName("cartao-pokemon:not(.hidden)");

  if (visibleCards.length === 0) {
    searchResult.textContent = "";
    return;
  }

  for (var i = 0; i < visibleCards.length; i++) {
    var cardClone = visibleCards[i].cloneNode(true);
    searchResult.appendChild(cardClone);
  }
}
