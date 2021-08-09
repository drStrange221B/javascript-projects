const movieSelect = document.querySelector("#movie");
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value;

//Update the UI
populateUI();


//populate UI from Local Storage
function populateUI() {
    
    const selectedSeatsStored = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeatsStored != null && selectedSeatsStored.length > 0) {
        selectedSeatsStored.forEach(index => {
            if (seats[index] != -1) {
                seats[index].classList.add('selected');
            }
        })
    }

    count.innerHTML = selectedSeatsStored.length;
    totalSelected = selectedSeatsStored.length;
    let moviePrice = +localStorage.getItem('selectedMoviePrice');

    total.innerHTML = moviePrice * totalSelected;

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount(){

    const selected = document.querySelectorAll(".row .seat.selected");

    let seatedIndex = [...selected].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatedIndex));

    count.innerHTML = selected.length;
    total.innerHTML = ticketPrice * selected.length;
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', e => {
    
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

