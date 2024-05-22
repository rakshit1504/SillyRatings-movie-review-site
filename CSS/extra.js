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
      tile.textContent = Adventure ${i + 1};
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
      image.src = ./${genre}/${genre}${i}.jpg;
      image.style.width = "100%";
      image.style.height = "auto";
  
      tile.appendChild(image);
      container.appendChild(tile);
  
      // Adding click event listener to each tile
      tile.addEventListener("click", function() {
        
        handleTileClick(genre, i);
      });
    }
  }
  
  // Function to handle click on each tile
  function handleTileClick(genre, index) 
  {
    selectedGenre = genre;
    i = index;
    console.log("Clicked on tile:", selectedGenre, i);
    
    switch(genre)
    {
      case "action":
        if(i===0)
        {
          movie="Raiders of the Lost Ark";
          console.log(movie);
        }
        else if(i===1)
        {
          movie= "Star Wars the force awakens";
          console.log(movie);
        }
        else if(i===2)
        {
          movie= "John Wick";
          console.log(movie);
        }
        else if(i===3)
        {
          movie= "The Terminator";
          console.log(movie);
        }
        else if(i===4)
        {
          movie= "Mission: Impossible";
          console.log(movie);
        }
        else if(i===5)
        {
          movie= "F9: The Fast Saga";
          console.log(movie);
        }
        else if(i===6)
        {
          movie= "Top Gun: Maverick";
          console.log(movie);
        }
        else if(i===7)
        {
          movie= "Dunkirk";
          console.log(movie);
        }
        else if(i===8)
        {
          movie= "Die hard";
          console.log(movie);
        }
        else if(i===9)
        {
          movie= "The Revenant";
          console.log(movie);
        }



        case "comedy":
        if(i===0)
        {
          movie="The Hangover";
          console.log(movie);
        }
        else if(i===1)
        {
          movie= "The 40-Year-Old Virgin";
          console.log(movie);
        }
        else if(i===2)
        {
          movie= "Home Alone";
          console.log(movie);
        }
        else if(i===3)
        {
          movie= "Borat";
          console.log(movie);
        }
        else if(i===4)
        {
          movie= "Ted";
          console.log(movie);
        }
        else if(i===5)
        {
          movie= "Deadpool";
          console.log(movie);
        }
        else if(i===6)
        {
          movie= "The Dictator";
          console.log(movie);
        }
        else if(i===7)
        {
          movie= "Migration";
          console.log(movie);
        }
        else if(i===8)
        {
          movie= "Mr. Bean's Holiday";
          console.log(movie);
        }
        else if(i===9)
        {
          movie= "American Pie";
          console.log(movie);
        }



        case "drama":
        if(i===0)
        {
          movie="Oppenheimer";
          console.log(movie);
        }
        else if(i===1)
        {
          movie= "Forrest Gump";
          console.log(movie);
        }
        else if(i===2)
        {
          movie= "The Godfather";
          console.log(movie);
        }
        else if(i===3)
        {
          movie= "Pulp Fiction";
          console.log(movie);
        }
        else if(i===4)
        {
          movie= "Schindler's List";
          console.log(movie);
        }
        else if(i===5)
        {
          movie= "Killers of the Flower Moon";
          console.log(movie);
        }
        else if(i===6)
        {
          movie= "Goodfellas";
          console.log(movie);
        }
        else if(i===7)
        {
          movie= "The Wolf of Wall Street";
          console.log(movie);
        }
        else if(i===8)
        {
          movie= "American Fiction";
          console.log(movie);
        }
        else if(i===9)
        {
          movie= "Titanic";
          console.log(movie);
        }



        case "fantasy":
        if(i===0)
        {
          movie="The Chronicles of Narnia";
          console.log(movie);
        }
        else if(i===1)
        {
          movie= "Lord of the Rings";
          console.log(movie);
        }
        else if(i===2)
        {
          movie= "Harry Potter and the Sorcerer's Stone";
          console.log(movie);
        }
        else if(i===3)
        {
          movie= "Soul";
          console.log(movie);
        }
        else if(i===4)
        {
          movie= "The Wizard of Oz";
          console.log(movie);
        }
        else if(i===5)
        {
          movie= "Toy Story";
          console.log(movie);
        }
        else if(i===6)
        {
          movie= "The Shape of Water";
          console.log(movie);
        }
        
        else if(i===7)
        {
          movie= "Harry Potter and the Deathly Hallows";
          console.log(movie);
        }
        else if(i===8)
        {
          movie= "Twilight";
          console.log(movie);
        }
        else if(i===9)
        {
          movie= "Shrek";
          console.log(movie);
        }




        case "romance":
        if(i===0)
        {
          movie="La La Land";
          console.log(movie);
        }
        else if(i===1)
        {
          movie= "Friends with Benefits";
          console.log(movie);
        }
        else if(i===2)
        {
          movie= "The Fault in Our Stars";
          console.log(movie);
        }
        else if(i===3)
        {
          movie= "Call Me by Your Name";
          console.log(movie);
        }
        else if(i===4)
        {
          movie= "The Notebook";
          console.log(movie);
        }
        else if(i===5)
        {
          movie= "A Star is Born";
          console.log(movie);
        }
        else if(i===6)
        {
          movie= "The Space Between Us";
          console.log(movie);
        }
        
        else if(i===7)
        {
          movie= "All The Bright Places";
          console.log(movie);
        }
        else if(i===8)
        {
          movie= "No Strings Attached";
          console.log(movie);
        }
        else if(i===9)
        {
          movie= "Wall-E";
          console.log(movie);
        }
    }
  
    fetchMovieID2(movie);
  }
  
  
  async function fetchMovieID2(movieName) {
    const response = await fetch(https://omdbapi.com/?s=${movieName}&page=1&apikey=d9ed634b);
    const searchData = await response.json();
    if (searchData.Response === "True" && searchData.Search.length > 0) {
        const movieID = searchData.Search[0].imdbID;
        fetchMovieDetails2(movieName); // Assuming the first search result is the desired movie
        return movieID;
    } else {
        throw new Error("Movie not found or API request failed");
    }
  }
  
  async function fetchMovieDetails2(movieName) {
    try {
        const movieID = await fetchMovieID2(movieName);
        const response = await fetch(https://omdbapi.com/?i=${movieID}&apikey=d9ed634b);
        const movieDetails = await response.json();
        displayMovieDetails2(movieDetails);
    } catch (error) {
        console.error(error);
    }
  }
  
  
  function displayMovieDetails2(details) {
    resultGrid2.innerHTML = "";
  
    resultGrid2.innerHTML = `
    <div class="movie-poster">
        <img src="${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt="movie poster">
    </div>
    <div class="movie-info">
        <h3 class="movie-title">${details.Title}</h3>
        <ul class="movie-misc-info">
            <li class="year">Year: ${details.Year}</li>
            <li class="rated">Ratings: ${details.Rated}</li>
            <li class="released">Released: ${details.Released}</li>
        </ul>
        <p class="genre"><b>Genre:</b> ${details.Genre}</p>
        <p class="writer"><b>Writer:</b> ${details.Writer}</p>
        <p class="actors"><b>Actors: </b>${details.Actors}</p>
        <p class="plot"><b>Plot:</b> ${details.Plot}</p>
        <p class="language"><b>Language:</b> ${details.Language}</p>
        <p class="awards"><b><i class="fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
  }
  
  
  // async function loadMoviesn(searchTerm) 
  // {
  //     const URL = https://omdbapi.com/?s=${searchTerm}&page=1&apikey=d9ed634b;
  //     const res = await fetch(${URL});
  //     const data = await res.json();
  
  //     // const result = await fetch(http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=d9ed634b);
  //     // const movieDetails = await result.json();
  //     // console.log(movieDetails);
  //     //displayMovieDetails(movieDetails);
  //     // console.log(data.Search);
  //     if(data.Response == "True") displayMovieDetailsm(data);
  // }
  
  // function displayMovieDetailsm(details){
  //   resultGrid2.innerHTML = `
  //   <div class = "movie-poster">
  //       <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
  //   </div>
  //   <div class = "movie-info">
  //       <h3 class = "movie-title">${details.Title}</h3>
  //       <ul class = "movie-misc-info">
  //           <li class = "year">Year: ${details.Year}</li>
  //           <li class = "rated">Ratings: ${details.Rated}</li>
  //           <li class = "released">Released: ${details.Released}</li>
  //       </ul>
  //       <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
  //       <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
  //       <p class = "actors"><b>Actors: </b>${details.Actors}</p>
  //       <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
  //       <p class = "language"><b>Language:</b> ${details.Language}</p>
  //       <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
  //   </div> 
  //   `;
  // }
  
  
  
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