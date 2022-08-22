var user_location = localStorage.getItem('user_location')
console.log(user_location)

function createElement(el, className) {
  const e = document.createElement(el);
  e.classList.add(className);
  return e;
}

function createTextElement(text) {
  const el = document.createElement('h5');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  return el;
}

function formatTime(dateObj) {

  let monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

  if (dateObj.noSpecificTime) {
     const dateTime = new Date(dateObj.localDate);
     const month = monthFormatter.format(dateTime);
     const date = dateTime.getDate();

     return `${month} ${date}`;
  } else {
     const dateTime = new Date(dateObj.dateTime);
     const date = dateTime.getDate();
     const month = monthFormatter.format(dateTime)
     const time = dateTime.toLocaleTimeString();

     return `${month} ${date}, ${time}`;
  }
}

function createCardContent(card, contentEl) {
  const titleText = createTextElement(card.eventName);
  const venueText = createTextElement(card.eventVenue)
  const timeText = createTextElement(formatTime(card.eventDateTime));

  contentEl.appendChild(titleText);
  contentEl.appendChild(venueText);
  contentEl.appendChild(timeText);
}

function renderCard(card) {
  const cardContainer = createElement('div', 'col');
  cardContainer.classList.add('s12');
  const cardItem = createElement('div', 'card');
  cardItem.classList.add('horizontal', 'deep-purple', 'lighten-3');

  const cardContent = createElement('div', 'card-content');
  cardContent.classList.add('blue-text', 'text-darken-4');
  
  createCardContent(card, cardContent);

  cardItem.appendChild(cardContent);
  cardContainer.appendChild(cardItem);
  return cardContainer;
}

function displayCards(cardArray) {
  const resultsContainer = document.getElementById('results');
     
  cardArray.forEach((card) => {
     const row = createElement('div', 'row');
     const renderedCard = renderCard(card);
     console.log("rendered card: ", renderedCard);
     // const newRow = createElement('div', 'row');
     row.appendChild(renderedCard);
     resultsContainer.appendChild(row);
  })
}

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=date,asc&locale=*&city=" + user_location + "&apikey=U9U79W6aroxgXPoxrbUloPyqkHPTVAyD";
console.log(queryURL)
$.ajax({
   url: queryURL,
   method: "GET"
}).then(function (response) {
   let cardArray = new Array();
   console.log(response);
   removeStaleEvents();
   response._embedded.events.forEach((event) => {
      //console.log("event log: ", event);
      const card = {
         eventName: event.name,
         eventVenue: event._embedded.venues[0].name,
         eventDateTime: event.dates.start,
      }
      //console.log("card log: ", card);
      cardArray.push(card);
   })
   displayCards(cardArray);
    function removeStaleEvents() {
      var el = document.getElementById('results');
      while (el.firstChild)
         el.removeChild(el.firstChild);
   }
});

//console.log(localStorage.getItem('user_location'));