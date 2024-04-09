// Function to open the modal with drama details
function openModal(dramaName) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
  
    // Clear the modal description's content
    modalDescription.innerHTML = '';
  
    // Set title and description based on the dramaName
    if (dramaName === "brb") {
      var description =
        "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan.";
      var cast =
        "Cast: Bryan Cranston, Aaron Paul, Giancarlo Esposito, Bob Odenkirk";
      var castParagraph = document.createElement("p");
      castParagraph.textContent = cast;
      modalDescription.textContent = description;
      modalDescription.appendChild(castParagraph);
    }

  if (dramaName === "bcs") {
    var description =
      "Better Call Saul is an American television crime drama series created by Vince Gilligan and Peter Gould. It is a prequel and spin-off of Gilligan's previous series, Breaking Bad.";
    var cast = "Cast: Bob Odenkirk, Giancarlo Esposito, Jonathan Banks";
    var castParagraph = document.createElement("p");
    castParagraph.textContent = cast;
    modalDescription.textContent = description;
    
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "got") {
    var description =
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.";
    var cast = "Cast: Emilia Clarke, Kit Harington, Peter Dinklage";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "chernobyl") {
    var description =
      "Chernobyl is a historical drama television miniseries created and written by Craig Mazin and directed by Johan Renck.";
    var cast = "Cast: Jared Harris, Stellan Skarsgård, Emily Watson";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "13why") {
    var description =
      "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.";
    var cast = "Cast: Dylan Minnette, Katherine Langford";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "dark") {
    var description =
      "Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese.";
    var cast =
      "Cast: Louis Hofmann, Karoline Eichhorn, Lisa Vicari, Maja Schöne";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "loki") {
    var description =
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” ";
    var cast = "Cast: Tom Hiddleston, Owen Wilson";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "mm") {
    var description =
      "An isolated island community experiences miraculous events - and frightening omens - after the arrival of a charismatic, mysterious young priest.";
    var cast = "Cast: Kate Winslet, Julianne Nicholson, Jean Smart";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "moneyheist") {
    var description =
      "The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain.";
    var cast = "Cast: Úrsula Corberó, Álvaro Morte, Itziar Ituño, Pedro Alonso";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "Narcos") {
    var description =
      "Narcos is an American crime drama television series created and produced by Chris Brancato, Carlo Bernard, and Doug Miro.";
    var cast =
      "Cast: Bryan Cranston, Aaron Paul, Giancarlo Esposito, Bob Odenkirk";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "peaky") {
    var description =
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.";
    var cast =
      "Cast: Cillian Murphy, Paul Anderson, Helen McCrory, Sophie Rundle";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "sherlock") {
    var description =
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.";
    var cast =
      "Cast: Benedict Cumberbatch, Martin Freeman";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "soprano") {
    var description =
      "New Jersey mob boss, Tony Soprano, deals with personal and professional issues in his home and business life.";
    var cast =
      "Cast: James Gandolfini, Lorraine Bracco, Edie Falco, Michael Imperioli";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "st") {
    var description =
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.";
    var cast =
      "Cast: Millie Bobby Brown, Finn Wolfhard, Sadie Sink, Gaten Matarazzo";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "Suits") {
    var description =
      "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.";
    var cast =
      "Cast: Gabriel Macht, Patrick J. Adams, Meghan Markle, Sarah Rafferty";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  if (dramaName === "boys") {
    var description =
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.";
    var cast =
      "Cast: Karl Urban, Jack Quaid, Antony Starr, Erin Moriarty";
    var castParagraph = document.createElement("p");
    modalDescription.textContent = description;
    castParagraph.textContent = cast;
    modalDescription.appendChild(castParagraph);
  }

  // Add more if statements for other dramas

  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
