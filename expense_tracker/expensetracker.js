const expense=()=>{
    const amountInput=document.getElementById("amount").value;
    const categoryInput=document.getElementById("category").value;
    const dateInput=document.getElementById("date").value;
    amount=parseInt(amountInput);
    
}
displayFn=()=>{
    document.getElementById("dailyexpense").style.display = "block";
    document.getElementById("dailyexpense").innerHTML+=`<table>
    <tr>
    <td>Amount</td>
    <td>Category</td>
    <td>date</td>
    <tr>
    <tr>
    <td>${amount}</td>
    <td>${categoryInput} </td>
    <td>${dateInput}</td>
    </table>`


}

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();
    var amount=document.getElementById("amount").value;
    var category=document.getElementById("category").value;
    var date1=document.getElementById("date1").value;
    
    var displayDiv = document.getElementById("displayexpense");
    displayDiv.innerHTML = "<br><table><tr><td>Amount:</td><td> " + amount + "</td></tr>" +
                           "<tr><td>Category:</td><td> " + category + "</td></tr>" +
                           "<tr><td>Date:</td><td> " + date1 + "</td></tr></table>";
});