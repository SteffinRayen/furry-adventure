/*Getting a new quote on page load*/
$(document).ready(function() {
    newQuote();
  });
  
  /*Getting a new quote on new quote click*/
  $("#getMessage").on("click", function() {
    newQuote();
  });
  
  /*Retrieving a new quote*/
  function newQuote() {
    var quote = "";
    var source = "";
    var url = "https://labs.bible.org/api/?passage=random&type=json&callback=?";
    $.getJSON(url, function(data) {
      /*Assigning quote and book, chapter, and verse number*/
      quote = data[0].text;
      source = data[0].bookname + " " + data[0].chapter + " : " + data[0].verse;
      /*Removing extra info from API response*/
      quote = quote.slice(0, quote.length - 88);
      /*Changing html to new quote*/
      $("#BibleVerse").text(quote);
      $("#BibleSource").text(source);
    });
  }
  