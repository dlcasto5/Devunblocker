// Function to unblock a website by modifying the browser's proxy settings
function unblockWebsite(url) {
    // Check if the URL is valid
    if (!isValidUrl(url)) {
        console.error("Invalid URL provided.");
        return;
    }

    // Create a new XMLHttpRequest to fetch the content of the website
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    
    // Set up a callback function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Successfully fetched the content
            console.log("Website content:", xhr.responseText);
        } else {
            console.error("Failed to unblock the website. Status:", xhr.status);
        }
    };

    // Handle network errors
    xhr.onerror = function() {
        console.error("Network error occurred while trying to unblock the website.");
    };

    // Send the request
    xhr.send();
}

// Helper function to validate the URL format
function isValidUrl(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
        '\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\])' + // IPv6
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}

// Function to perform a Google search
function googleSearch(query) {
    if (!query) {
    console.error("Query cannot be empty");
    return;
    }
    const baseUrl = "https://www.google.com/search?q=";
    const searchUrl = baseUrl + encodeURIComponent(query);
    window.open(searchUrl, "_blank");
}

// Handle the search button click
    function handleSearch() {
    const input = document.getElementById('searchInput').value;
    googleSearch(input);
}

// Handle the unblock button click
    function handleUnblock() {
    const input = document.getElementById('searchInput').value;
    unblockWebsite(input)
}
