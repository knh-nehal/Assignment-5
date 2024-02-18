const seats = document.getElementsByClassName("seat");
let ticketSale = 0;
const ticketPrice = 550;

for (const seat of seats) {
    seat.addEventListener('click', function () {
        seat.classList.add("bg-[#1DD100]", "text-white");

        let ticketRemaining = parseInt(document.getElementById("ticket-left").innerText);
        ticketRemaining -= 1;
        document.getElementById("ticket-left").innerText = ticketRemaining;
        ticketSale++;

        let seatName = seat.innerText;

        let p1 = document.createElement("p");
        p1.innerText = seatName;
        let p2 = document.createElement("p");
        p2.innerText = "Economy";
        let p3 = document.createElement("p");
        p3.innerText = ticketPrice;
        let div = document.createElement("div");
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("flex", "justify-between", "gap-10");

        let ticketBox = document.getElementById("ticket-box");
        ticketBox.appendChild(div);

        let ticketBoxNum = parseInt(document.getElementById("ticket-box-num").innerText);
        ticketBoxNum = ticketSale;
        document.getElementById("ticket-box-num").innerText = ticketSale;
    })
}