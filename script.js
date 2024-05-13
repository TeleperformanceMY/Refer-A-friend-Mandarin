const qrImg = document.getElementById('qrImg');
const qrBox = document.getElementById('qrBox');
const generatedLink = document.getElementById('generated-link');
const shareButtonWhatsApp = document.getElementById('share-button-whatsapp');
const shareButtonLine = document.getElementById('share-button-line');

// Function to submit the form in Step 1
function submitForm(location) {
    var idInput = document.getElementById("id").value;
    if (!idInput) {
        alert("Please enter your BMS Identification Code.");
        return;
    }
    if (location === 'Penang') {
        showStep('step2');
        document.getElementById("first-options").style.display = "block";
        document.getElementById("second-options").style.display = "none";
    } else if (location === 'KL') {
        showStep('step2');
        document.getElementById("first-options").style.display = "none";
        document.getElementById("second-options").style.display = "block";
    }
}

// Function to generate link in Step 2 and show Step 3
function generateLink(option) {
    var idInput = document.getElementById("id").value;
    if (!idInput) {
        alert("Please enter your BMS Identification Code.");
        return;
    }
    var link;
    switch (option) {
        case 1:
            link = "https://careerseng-teleperformance.icims.com/jobs/37277/customer-success-specialist---mandarin/job?mode=job&iis=RAF&iisn=" + idInput ;
            break;
        case 2:
            link = "https://careerseng-teleperformance.icims.com/jobs/34090/customer-success-specialist---banking-%28m%29---mandarin/job?mode==job&iis=RAF&iisn=" + idInput ;
            break;
        case 3:
            link = "https://careerseng-teleperformance.icims.com/jobs/34090/customer-success-specialist---banking-%28m%29---mandarin/job?mode==job&iis=RAF&iisn=" + idInput ;
            break;
        case 4:
            link = "www.D1-example.com";
            break;
        default:
            link = "";
    }
    generatedLink.innerHTML = '<a href="' + link + '" target="_blank">' + link + '</a>';
    generateQrCode(link); // Generate QR code for the link
    showStep('step3'); // Show Step 3
}

// Function to show a specific step and hide the rest
function showStep(stepId) {
    var steps = document.querySelectorAll(".popup-content");
    for (var i = 0; i < steps.length; i++) {
        if (steps[i].id === stepId) {
            steps[i].style.display = "block";
        } else {
            steps[i].style.display = "none";
        }
    }
}

// Function to share on WhatsApp
shareButtonWhatsApp.addEventListener("click", function() {
    const link = generatedLink.textContent;
    const message = `Check out this link: ${link}`;

    // Create a shareable link for WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Open WhatsApp share link in a new window
    window.open(whatsappLink, "_blank");
});

// Function to share on LINE
shareButtonLine.addEventListener("click", function() {
    const link = generatedLink.textContent;
    const message = `Check out this link: ${link}`;

    // Create a shareable link for LINE
    const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;

    // Open LINE share link in a new window
    window.open(lineLink, "_blank");
});

// Function to generate QR code
function generateQrCode(link) {
    // Construct the URL for the qrserver.com API
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

    // Set the source of the QR image
    qrImg.src = apiUrl;

    // Display the QR container
    qrBox.style.display = "block";
}
