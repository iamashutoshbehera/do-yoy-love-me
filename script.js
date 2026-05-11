const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function moveButton() {

    // Browser visible area
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Yes button size
    const buttonWidth = yesBtn.offsetWidth;
    const buttonHeight = yesBtn.offsetHeight;

    // Safe space from browser edges
    const padding = 20;

    // Maximum allowed positions
    const maxX = viewportWidth - buttonWidth - padding;
    const maxY = viewportHeight - buttonHeight - padding;

    // Minimum allowed positions
    const minX = padding;
    const minY = padding;

    // Random positions within browser view
    const randomX =
        Math.floor(Math.random() * (maxX - minX)) + minX;

    const randomY =
        Math.floor(Math.random() * (maxY - minY)) + minY;

    // Move Yes button
    yesBtn.style.position = "fixed";
    yesBtn.style.left = `${randomX}px`;
    yesBtn.style.top = `${randomY}px`;
}

/* Desktop Hover */

yesBtn.addEventListener("mouseenter", moveButton);

/* Mobile Tap */

yesBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

/* No Button Click */

noBtn.addEventListener("click", () => {

    // Create popup message
    const popup = document.createElement("div");

    popup.innerHTML = "😭 You broke my heart!";

    // Popup styling
    popup.style.position = "fixed";
    popup.style.top = "30px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.backgroundColor = "#d10068";
    popup.style.color = "white";
    popup.style.padding = "15px 25px";
    popup.style.borderRadius = "12px";
    popup.style.fontSize = "22px";
    popup.style.fontWeight = "bold";
    popup.style.zIndex = "9999";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    // Add popup to page
    document.body.appendChild(popup);

    // Remove popup after 2.5 seconds
    setTimeout(() => {
        popup.remove();
    }, 2500);
});