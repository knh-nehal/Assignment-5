const seats = document.getElementsByClassName("seat");
let ticketSale = 0;
const ticketPrice = 550;

let numBox = document.getElementById("num-box");
numBox.addEventListener("input", function (e) {
    if (e.target.value && ticketSale >= 1) {
        document.getElementById("next-btn").removeAttribute("disabled");
    }
})

for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (ticketSale < 4) {
            seat.classList.add("bg-[#1DD100]", "text-white");

            let ticketRemaining = parseInt(document.getElementById("ticket-left").innerText);
            ticketRemaining -= 1;
            document.getElementById("ticket-left").innerText = ticketRemaining;
            ticketSale++;

            let seatName = seat.innerText;
            seat.disabled = true;
            seat.classList.add("disabled:bg-[#1DD100]", "disabled:text-white");

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
            div.classList.add("flex", "justify-between", "items-center", "space-y-2");

            let ticketBox = document.getElementById("ticket-box");
            ticketBox.appendChild(div);

            let ticketBoxNum = parseInt(document.getElementById("ticket-box-num").innerText);
            ticketBoxNum = ticketSale;
            document.getElementById("ticket-box-num").innerText = ticketBoxNum;

            let totalPrice = parseInt(document.getElementById("total-price").innerText);
            totalPrice = ticketPrice * ticketSale;
            document.getElementById("total-price").innerText = totalPrice;

            let grandPrice = parseInt(document.getElementById("grand-total").innerText);
            grandPrice = ticketPrice * ticketSale;
            document.getElementById("grand-total").innerText = grandPrice;

            let couponCode = document.getElementById("coupon-code");

            document.getElementById("next-btn").removeAttribute("disabled");

            if (ticketSale === 4) {
                document.getElementById("apply-btn").removeAttribute("disabled");
                document.getElementById("apply-btn").addEventListener("click", function () {
                    if (couponCode.value === "NEW15") {
                        document.getElementById("grand-total").innerText = parseInt(grandPrice) - 0.15 * parseInt(grandPrice);
                        couponCode.value = "";
                        document.getElementById("coupon-input-box").classList.add("hidden");
                        const discountPrice = 0.15 * parseInt(totalPrice);
                        document.getElementById("discount-price").innerText = discountPrice;
                        document.getElementById("discount-container").classList.remove("hidden");
                    } else if (couponCode.value === "Couple 20") {
                        document.getElementById("grand-total").innerText = parseInt(grandPrice) - 0.20 * parseInt(grandPrice);
                        couponCode.value = "";
                        document.getElementById("coupon-input-box").classList.add("hidden");
                        const discountPrice = 0.20 * parseInt(totalPrice);
                        document.getElementById("discount-price").innerText = discountPrice;
                        document.getElementById("discount-container").classList.remove("hidden");
                    } else {
                        alert("Enter Valid Coupon Please");
                    }
                })
            }
        } else {
            alert("You can't buy more than 4 tickets in a row..");
        }
    })
}