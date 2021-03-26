orderTotal = document.getElementById('order-total');
downPayment = document.getElementById('down-payment');
btn = document.getElementById('calculate');
remainder = document.getElementById('remainder');
months12 = document.getElementById('12-months');
months24 = document.getElementById('24-months');
months39 = document.getElementById('39-months');

btn.addEventListener("click", calculateSplit);

function calculateSplit() {
    totalAfterDown = Math.round((orderTotal.value - downPayment.value) * 100) / 100;
    remainder.innerText = `Total after down payment: $${totalAfterDown}`;
    months12.innerText = '12 months: $' + Math.round((totalAfterDown / 12) * 100) / 100 + ' / month';
    months24.innerText = '24 months: $' + Math.round((totalAfterDown / 24) * 100) / 100 + ' / month';
    months39.innerText = '39 months: $' + Math.round((totalAfterDown / 39) * 100) / 100 + ' / month';
}