// A random word
var randomWordURL = "http://api.wordnik.com/v4/words.json/randomWord?" +
                    "&minLength=5&maxLength=-1" +
                    "&api_key=0f96ea74e9fe02138200100cc370c83e5eb718fafefd45da4";


function setup() {
  noCanvas();
  wordnik('word', randomWordURL);
}

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function wordnik(one, url) {
  loadJSON(url, wordLoaded);
  function wordLoaded(data) {
    var div = createDiv((data.word).toProperCase());
    div.parent(one);
  }
}