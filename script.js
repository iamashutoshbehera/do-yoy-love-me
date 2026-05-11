const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function moveButton() {

    // Browser visible area
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Button sizes
    const yesWidth = yesBtn.offsetWidth;
    const yesHeight = yesBtn.offsetHeight;

    // No button position
    const noRect = noBtn.getBoundingClientRect();

    // Safe spacing from edges
    const padding = 20;

    // Minimum distance from No button
    const safeDistance = 120;

    // Allowed movement area
    const maxX = viewportWidth - yesWidth - padding;
    const maxY = viewportHeight - yesHeight - padding;

    const minX = padding;
    const minY = padding;

    let randomX;
    let randomY;

    let isOverlapping = true;

    // Keep generating position until it is safe
    while (isOverlapping) {

        randomX =
            Math.floor(Math.random() * (maxX - minX)) + minX;

        randomY =
            Math.floor(Math.random() * (maxY - minY)) + minY;

        // Distance from No button
        const distanceX = Math.abs(randomX - noRect.left);
        const distanceY = Math.abs(randomY - noRect.top);

        // Check overlap safety
        if (
            distanceX > safeDistance ||
            distanceY > safeDistance
        ) {
            isOverlapping = false;
        }
    }

    // Move Yes button
    yesBtn.style.position = "fixed";
    yesBtn.style.left = `${randomX}px`;
    yesBtn.style.top = `${randomY}px`;
}

/* Desktop Hover */

yesBtn.addEventListener("mouseenter", moveButton);

/* Mobile Touch */

yesBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

/* No Button Click */

noBtn.addEventListener("click", () => {

    // Create popup
    const popup = document.createElement("div");

    popup.innerHTML = "😭 You broke my heart!";

    // Styling
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

    document.body.appendChild(popup);

    // Remove popup
    setTimeout(() => {
        popup.remove();
    }, 2500);
});