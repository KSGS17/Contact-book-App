# Contact-book-App
Contact book app
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body onload="fetchContacts()">
    

    <div id="table">Contacts loading...</div>
    <button id="refresh" type="button">Refresh</button>
    <button id="addContact" type="button">addContact</button>
    
    <script src="config.js"></script>

    <script>
        function fetchContacts() {
            fetch(rootPath + "controller/get-Contacts/")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                //displayOutput(data);
                console.log(data);
            });
        }
      
               
        
     </script>


</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>API key</title>
</head>
<body>
    <div>Please enter valid API key.</div>
    <form>
        <input type="email" id="api_key" name="API key" />
        <button id="submitApiKey">Submit</button>
       
    </form>

    <script>
        let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
        document.getElementById("submitApiKey").addEventListener('click', setApiKey);
        
        function setApiKey(e) {
            e.preventDefault();

            apiKey = document.getElementById("apiKey").value;
            fetch(rootPath + "controller/api-key/?apiKey=" + apiKey)
            .then(function (response) {
                    return response.text();
                })
               .then(function (data) {
                  
                if (data == "1") {
                    localStorage.setItem("apiKey", apiKey);
                    window.open= ("index.html", "_self");
                } else {
                    alert(data + "Invalid API key entered!");
                
                }
            })
        }
              
    </script>

    

</body>
</html>

let rootPath = "http://mysite.itvarsity.org/api/ContactBookApp/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self")
    }
    return localStorage.getItem("apiKey");
}

    
