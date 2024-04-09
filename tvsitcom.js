// Function to open the modal with sitcom details
function openModal(sitcomName) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    modalDescription.innerHTML = '';


    // Set title and description based on the sitcomName
    if (sitcomName === 'friends') {

        var description = "Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.";
        // Additional details for Friends if needed
        var cast = "Cast: Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'himym') {
        var description = "How I Met Your Mother is an American sitcom created by Craig Thomas and Carter Bays. The series, which ran from 2005 to 2014, follows the main character, Ted Mosby, and his group of friends in New York City's Manhattan.";
        // Additional details for How I Met Your Mother if needed
        var cast = "Cast: Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris, Alyson Hannigan";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'tbbt') {
        var description = "The Big Bang Theory is an American television sitcom created by Chuck Lorre and Bill Prady, both of whom served as executive producers on the series, along with Steven Molaro. All three also served as head writers.";
        // Additional details for The Big Bang Theory if needed
        var cast = "Cast: Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg, Kunal Nayyar, Mayim Bialik, Melissa Rauch";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'office') {
        var description = "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.";
        // Additional details for The Office if needed
        var cast = "Cast: Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer, B.J. Novak, Mindy Kaling, Ellie Kemper, Ed Helms";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'b99') {
        var description = "Brooklyn Nine-Nine is an American police procedural comedy television series created by Dan Goor and Michael Schur.";
        var cast = "Cast: Andy Samberg, Terry Crews, Stephanie Beatriz, Melissa Fumero, Joe Lo Truglio, Chelsea Peretti, Andre Braugher";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'twoandahalf') {
        var description = "A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house. ";
        var cast = "Cast: Jon Cryer, Ashton Kutcher, Angus T. Jones, Conchata Ferrell, Holland Taylor, Marin Hinkle, Melanie Lynskey";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'that70') {
        var description = "A comedy revolving around a group of teenage friends, their mishaps, and their coming of age, set in 1970s Wisconsin.";
        var cast = "Cast: Topher Grace, Laura Prepon, Mila Kunis, Danny Masterson, Wilmer Valderrama, Debra Jo Rupp, Kurtwood Smith, Don Stark";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'sexedu') {
        var description = "The show uses sex as a means to explore human connection and intimacy, with sex stories serving as a context for deeper emotional moments.";
        var cast = "Cast: Asa Butterfield, Gillian Anderson, Ncuti Gatwa, Emma Mackey, Connor Swindells, Kedar Williams-Stirling, Aimee Lou Wood, Tanya Reynolds";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'seinfeld') {
        var description = "The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.";
        var cast = "Cast: Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards, Jason Alexander, Ruth Cohen, Wayne Knight, John O'Hurley, Patrick Warburton";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'raymond') {
        var description = "The comical everyday life of sports columnist Ray Barone and his dysfunctional family.";
        var cast = "Cast: Ray Romano, Patricia Heaton, Brad Garrett, Doris Roberts, Peter Boyle, Madylin Sweeten, Sawyer Sweeten, Sullivan Sweeten";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'modernfam') {
        var description = "Three different but related families face trials and tribulations in their own uniquely comedic ways.";
        var cast = "Cast: Ed O'Neill, Sofía Vergara, Julie Bowen, Ty Burrell, Jesse Tyler Ferguson, Eric Stonestreet, Rico Rodriguez, Nolan Gould, Sarah Hyland, Ariel Winter";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'community') {
        var description = "A suspended lawyer is forced to enroll in a community college with an eclectic staff and student body.";
        var cast = "Cast: Joel McHale, Gillian Jacobs, Danny Pudi, Yvette Nicole Brown, Alison Brie, Donald Glover, Ken Jeong, Chevy Chase, Jim Rash";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'cheers') {
        var description = "The regulars of the Boston bar Cheers share their experiences and lives with each other while drinking or working at the bar where everybody knows your name.";
        var cast = "Cast: Ted Danson, Rhea Perlman, John Ratzenberger, George Wendt, Kelsey Grammer, Woody Harrelson, Kirstie Alley, Shelley Long, Nicholas Colasanto, Bebe Neuwirth";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'arrested') {
        var description = "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.";
        var cast = "Cast: Jason Bateman, Michael Cera, Portia de Rossi, Will Arnett, Alia Shawkat, Tony Hale, David Cross, Jeffrey Tambor, Jessica Walter";
        var castParagraph = document.createElement("p");
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === 'alexa') {
        var description = "Alexa is a high schooler suffering from cancer. Her best friend, Katie, helped her every step of the way. Katie even shaved her head for Alexa.";
        var cast = "Cast: Paris Berelc, Isabel May, Jolie Jenkins, Emery Kelly, Eddie Shin, Finn Carr, Tiffani Thiessen, Jack Griffo, Kerri Medders";
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }
    else if (sitcomName === '2broke') {
        var description = "Two young women waitressing at a greasy spoon diner strike up an unlikely friendship in the hopes of launching a successful business - if only they can raise the cash.";
        var cast = "Cast: Kat Dennings, Beth Behrs, Garrett Morris, Jonathan Kite, Matthew Moy, Jennifer Coolidge";
        modalDescription.textContent = description;
        castParagraph.textContent = cast;
        modalDescription.appendChild(castParagraph);
    }

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}