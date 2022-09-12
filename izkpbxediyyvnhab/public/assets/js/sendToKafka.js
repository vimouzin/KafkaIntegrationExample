function getInfo(){

   var data ={
    "Customer":  document.getElementById("firstName").value ,
    "lastName" : document.getElementById("lastName").value,
    "ZIP" : document.getElementById("zip").value,
    "ADDRESS" : document.getElementById("Address").value,
    "STATE" : document.getElementById("state").value,
    "CITY" : document.getElementById("city").value,
    "street" : document.getElementById("street").value,
    "income" : document.getElementById("income").value,
    "amount" : document.getElementById("loanAmount").value,
    "STATE" : document.getElementById("state").value
}
   postData("http://10.20.1.201:5000/llm",data)
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
