function getInfo(){

   var data ={
    "firstName":  document.getElementById("firstName").value ,
    "lastName" : document.getElementById("lastName").value,
    "phone" : document.getElementById("phone").value,
    "email" : document.getElementById("email").value,
    "state" : document.getElementById("state").value,
    "city" : document.getElementById("city").value,
    "street" : document.getElementById("street").value,
    "income" : document.getElementById("income").value,
    "amount" : document.getElementById("loanAmount").value,
    "state" : document.getElementById("state").value
}
   postData("http://127.0.0.1:5000/llm",data)
}


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}