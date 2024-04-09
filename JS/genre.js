function handleGenreChange(genre) {
  switch (genre) {
    case "action":
      handleAction();
      break;

    case "comedy":
      handleComedy();

      break;
    case "drama":
      handleDrama();

      break;
    case "fantasy":
      handleFantasy();

      break;
    case "horror":
      handleHorror();

      break;


    case "romance":
      handleRomance();

      break;
    case "sci-fi":
      handleSciFi();

      break;


    default:
      console.log("Unknown genre: " + genre);
  }
}

function handleAction() {

  const container = document.getElementById("result");
  container.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const tile = document.createElement("div");
    tile.style.width = "100px";
    tile.style.height = "100px";
    tile.style.border = "1px solid black";
    tile.style.margin = "10px";
    tile.textContent = `Adventure ${i + 1}`;
    container.appendChild(tile);
  }
}

function createTiles(genre) {
  const container = document.getElementById("result");
  container.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";

    const image = document.createElement("img");
    image.src = `./${genre}/${genre}${i}.jpg`;
    image.style.width = "100%";
    image.style.height = "auto";

    tile.appendChild(image);
    container.appendChild(tile);
  }
}


function handleAction() {
  createTiles('action');
}

function handleComedy() {
  createTiles('comedy');
}

function handleDrama() {
  createTiles('drama');
}

function handleFantasy() {
  createTiles('fantasy');
}

function handleHorror() {
  createTiles('horror');
}

function handleRomance() {
  createTiles('romance');
}

function handleSciFi() {

  createTiles('sci-fi');
}



