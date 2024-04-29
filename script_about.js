
function sendEmail() {
    if (navigator && navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        // Open a contact page for Firefox users (since Firefox doesn't support mailto in certain cases)
        window.location.href = '/contact';
    } else {
        // Open the mailto link
        window.location.href = 'mailto:iamabhi@gmail.com';
    }
}
