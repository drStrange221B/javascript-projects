const movie = document.querySelector("#movie");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value;

console.log(ticketPrice);



function updateSelectedCount(){

    const selected = document.querySelectorAll(".row .seat.selected");

    count.innerHTML = selected.length;
    total.innerHTML = ticketPrice * selected.length;
}

movie.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

container.addEventListener('click', e => {
    
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

