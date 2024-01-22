function generateCertificate() {
    // Get the user's name from the input field
    var userName = document.getElementById('name').value;

    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    // Create a new image element with the certificate template
    var certificate = new Image();
    // Replace 'Screenshot (199).png' with the correct path to your new image file
    certificate.src = 'Screenshot (199).png';

    // When the image is loaded, add the user's name and trigger the download
    certificate.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = certificate.width;
        canvas.height = certificate.height;
        var context = canvas.getContext('2d');

        // Draw the certificate template
        context.drawImage(certificate, 0, 0);

        // Customize the text appearance
        context.font = 'bold 24px Arial';
        context.fillStyle = '#000';
        context.textAlign = 'center';

        // Draw the user's name on the certificate
        context.fillText(userName, canvas.width / 2, 300);

        // Trigger the download
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg'); // assuming 'Screenshot (199).png' is a JPEG file
        link.download = 'Certificate_' + userName + '.jpg';
        link.click();
    };
}
