var nasaApiKey = "Fljc8AU9NalMFNImOE5kgv5PgzYSZvyzpkGREsVl";

function sendApiRequest(){
  // var input = document.getElementById().value;

  // var newNode = document.createElement("div");
  // newNode.innerText = input;
  // document.body.appendChild(newNode);

  var nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
  console.log(nasaApiUrl);

  fetch(nasaApiUrl)
  .then(function(response){
    return response.json();

  })
  .then(function(json){

    var headerOne = document.createElement("h1");
    headerOne.innerText = json["title"];
    document.body.appendChild(headerOne);

    var img = document.createElement("img");
    img.src =  json["url"]
    document.body.appendChild(img)

    var headerTwo = document.createElement("h2");
    headerTwo.innerText = json["copyright"];
    document.body.appendChild(headerTwo);

    var paragraph2 = document.createElement("p");
    paragraph2.innerText = json["date"];
    document.body.appendChild(paragraph2);

    var paragraph3 = document.createElement("p");
    paragraph3.innerText = json["explanation"];
    document.body.appendChild(paragraph3);

  })
}
