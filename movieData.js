let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};




// render movie data to html
// first loop over movie data (outer loop)
for (let movie in movieData) {
  const mImage = document.createElement("img");
  mImage.setAttribute('src', `${movie}.png`);
  document.getElementById("outer").appendChild(mImage);
  const mName = document.createElement("h1");
  const node = document.createTextNode(`${movie}`);
  mName.appendChild(node);
  document.getElementById("outer").appendChild(mName);
  // second loop over movie data (inner loop)
  for (let movieD in movieData[movie]) {
    const para = document.createElement("p");
    para.setAttribute('id', `${movieD}:${movie}`);
    const node = document.createTextNode(`${movieD}: ${movieD, movieData[movie][movieD]}`);
    para.appendChild(node);
    document.getElementById("outer").appendChild(para);
  }
}

// add movie rating

document.getElementById("myButton").onclick = function () {
   //declare variable to store users rating input
   //declare variable to store users movie rating selection
  let ratingInput = document.getElementById("inputText").value;
  let movieSelection = document.getElementById("movieName").value;
  document.getElementById(`rating:${movieSelection}`).innerHTML = `rating: ${ratingInput}`;
  movieData[`${movieSelection}`].rating = ratingInput;
  console.log(movieData[`${movieSelection}`].rating)
};

document.getElementById("myButton-2").onclick = function () {

  let mNameInput = document.getElementById("inputText-movieName").value;
  let plotInput = document.getElementById("inputText-plot").value;
  let castInput = document.getElementById("inputText-cast").value;
  let runtimeInput = document.getElementById("inputText-runtime").value;
  let ratingInput = document.getElementById("inputText-rating").value;
  let yearInput = document.getElementById("inputText-year").value;
  let imgElement = document.createElement("img");
  imgElement.setAttribute('src', "nothing.png");
  let h1Element = document.createElement("h1");
  h1Element.innerHTML = `${mNameInput}`;
  let plotElement = document.createElement("p");
  plotElement.innerHTML = `plot: ${plotInput}`;
  let castElement = document.createElement("p");
  castElement.innerHTML = `cast: ${castInput}`;
  let runtimeElement = document.createElement("p");
  runtimeElement.innerHTML = `runtime: ${runtimeInput}`;
  let ratingElement = document.createElement("p");
  ratingElement.innerHTML = `rating: ${ratingInput}`;
  let yearElement = document.createElement("p");
  yearElement.innerHTML = `year: ${yearInput}`;
  
  document.getElementById("outer").append(imgElement, h1Element, plotElement, castElement, runtimeElement, ratingElement, yearElement);

};


