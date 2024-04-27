function showTime() {
    const now = new Date();
    const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = dayNames[now.getDay()];
    const time = now.toLocaleTimeString();

    document.getElementById("myClock").textContent = `${day} ${time}`;
}

const myName = prompt("Adınızı girin:");
document.getElementById("myName").textContent = myName || "Ziyaretçi";

setInterval(showTime, 1000);
