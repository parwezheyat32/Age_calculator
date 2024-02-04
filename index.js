let currDate = document.getElementById("currDate");
let calAge = document.getElementById("age");
let dateOfBirth = document.getElementById("inputDate");
let age = document.getElementById("age");
let rst = document.getElementById("reset");
let result = document.getElementById("result");
let resultAge = document.getElementById("resultAge");

var today = new Date();
currDate.innerText=`Today's Date is : ${today.toLocaleDateString('en-US')}`;

calAge.addEventListener("click",()=>{
    var birthDate = new Date(dateOfBirth.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    resultAge.innerText = `Your Age is : ${age}`;
    console.log(age);

})

rst.addEventListener("click",myFunction);
function myFunction(){
    dateOfBirth.value="";
    result.innerText = "Reseted,Enter Again";
}
