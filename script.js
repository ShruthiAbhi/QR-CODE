const qrText = document.getElementById("qr-text");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (qrText.value.length > 0) {
        generateQRcode();
        downloadBtn.style.display = "block";
    } else {
        alert("Please Enter Some Text");
        downloadBtn.style.display = "none";
    }
});

downloadBtn.addEventListener("click", (e) => {
    let canvas = document.querySelector(".qr-body canvas");

    if (canvas !== null) {
        e.preventDefault();
        let imgData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        downloadBtn.setAttribute("href", imgData);
    }
});

function generateQRcode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        colorLight: "#ffffff",
        colorDark: "#000000",
    });
}
