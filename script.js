/* =========================================================
   DISTRICT 9 MARDAN
   Complete Updated script.js
   Features:
   - Delivery Order
   - Food Order via WhatsApp
   - Mobile Hamburger Menu
   - Left Side Mobile Navigation
   - Close Menu
   - Remove Favicon / Taskbar Logo
   - Reviews & Star Ratings
   - Portfolio Support
   ========================================================= */


/* =========================================================
   1. DELIVERY ORDER
   ========================================================= */

function sendOrder() {

    const name = document.getElementById("name")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const pickup = document.getElementById("pickup")?.value.trim() || "";
    const destination = document.getElementById("destination")?.value.trim() || "";
    const district = document.getElementById("district")?.value.trim() || "";

    if (
        name === "" ||
        phone === "" ||
        pickup === "" ||
        destination === "" ||
        district === ""
    ) }
        alert("Please fill in all the required fields.");