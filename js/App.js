
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '1822',
  'X-Auth-Token': '6356cb8a38a3613d2b1f69a3815415f9'
};
// Kodilla Task 12.7

$.ajaxSetup({
  headers: myHeaders
});

function setupColumns(columns) {
  
  columns.forEach(function (column) {
    var col = new Column(column.id, column.name);
    board.createColumn(col);
    setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  
  cards.forEach(function (card) {
    var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    col.createCard(card);
  })
}

$.ajax({
  
  url: baseUrl + '/board',
  method: 'GET',
  
  success: function(response) {
    setupColumns(response.columns);
  }
});