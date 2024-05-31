
//your JS code here. If required.
function removeArticles(name) {
  const articles = ["a", "an", "the"];
  for (const article of articles) {
    if (name.toLowerCase().startsWith(article + " ")) {
      return name.slice(article.length + 1).trim();
    }
  }
  return name;
}

function updateWebPage(bands) {
  const ul = document.getElementById("bands");
  bands.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
}

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

bands.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

updateWebPage(bands);
