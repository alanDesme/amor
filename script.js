// Corazones flotando
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖","💘","💕","💗","💓"][Math.floor(Math.random()*5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (6 + Math.random()*4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}, 500);

// Mensajes secretos
function mensaje1() {
    document.getElementById("mensaje").innerText =
        "Desde que llegaste, todo es más bonito 💕";
}

function mensaje2() {
    document.getElementById("mensaje").innerText =
        "Eres mi persona favorita en este mundo 🌸";
}

function mensaje3() {
    document.getElementById("mensaje").innerText =
        "No te suelto jamás, me encantas 💖";
}

// Animación al tocar la foto
function animarFoto() {
    const img = document.querySelector(".imagen img");
    img.classList.add("animar");
    setTimeout(() => img.classList.remove("animar"), 400);
}

// Compartir link
function compartir() {
    navigator.share({
        title: "Me matas 💘",
        text: "Mira esto que hice para ti ❤️",
        url: window.location.href
    });
}