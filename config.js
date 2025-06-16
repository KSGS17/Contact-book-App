let rootPath = "http://mysite.itvarsity.org/api/ContactBookApp/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self")
    }
    return localStorage.getItem("apiKey");
}