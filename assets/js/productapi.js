alert("Ini adalah Halaman Product API");

let endpoint = "https://crudcrud.com/api/303d180ed8e342d1b060284139dfef23/marvel";

let konten = document.getElementById("konten");

fetch(endpoint)
  .then((response) => response.json())
  .then((response) => {
    let movies = response[0].marvel;

    movies.forEach((movie) => {
      let card = document.createElement("div");
      card.className = "card";

      let img = document.createElement("img");
      img.src = movie.image;
      img.className = "card-img";
      img.alt = movie.title;

      let cardContent = document.createElement("div");
      cardContent.className = "card-content";

      let title = document.createElement("h2");
      title.className = "card-title";
      title.textContent = movie.title;

      let cast = document.createElement("p");
      cast.className = "card-text";
      cast.textContent = "Cast: " + movie.cast.join(", ");

      let year = document.createElement("p");
      year.className = "text-muted";
      year.textContent = "Year: " + movie.year;

      cardContent.appendChild(title);
      cardContent.appendChild(cast);
      cardContent.appendChild(year);

      card.appendChild(img);
      card.appendChild(cardContent);

      konten.appendChild(card);
    });
  });
