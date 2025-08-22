function addLine(text, delay) {
    setTimeout(() => {
        const line = document.createElement("div");


        // replace ... with animated dots
        if (text.includes("...")) {
            const parts = text.split("...");
            line.innerHTML = parts[0] + '<span class="dot"></span><span class="dot"></span><span class="dot"></span>' + (parts[1] || "");
        } else {
            line.innerText = text;
        }


        document.body.appendChild(line);
    }, delay);
}


// detect device
const isPhone = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || window.innerWidth < 768;


// fake hacking lines
const phoneLines = [
    "[*] Detecting device: Phone 📱...",
    "[*] Connecting to mobile system...",
    "[*] Access Granted ✅",
    "[*] Hacking Gallery...",
    "[*] Hacking Camera...",
    "[*] Hacking UPI Apps...",
    "[*] Hacking WhatsApp...",
    "[*] Extracting SMS & Contacts...",
    "[*] Finalizing exploit...",
    "[*] ⚠️ All Phone System Hacked ⚠️..."
];


const laptopLines = [
    "[*] Detecting device: Laptop/Desktop 💻...",
    "[*] Connecting to local network 192.168.0.1 ...",
    "[*] Access Granted ✅...",
    "[*] Hacking Gallery Folders...",
    "[*] Hacking Camera Drivers...",
    "[*] Hacking UPI Banking Portals...",
    "[*] Hacking WhatsApp Desktop...",
    "[*] Extracting Documents...",
    "[*] Uploading data to server...",
    "[*] ⚠️ All Laptop System Hacked ⚠️..."
];
setTimeout(() => {
    const credit = document.createElement("div");
    credit.innerText = "created by Ashish tiwari";
    document.body.appendChild(credit);
}, 15000);


// run
const script = isPhone ? phoneLines : laptopLines;

script.forEach((line, i) => addLine(line, 1000 * (i + 1)));
