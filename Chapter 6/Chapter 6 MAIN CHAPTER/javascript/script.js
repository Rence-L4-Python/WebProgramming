function calculate(){ //allows calculation functionality
    var petrol=document.getElementById("calcconst").value;
    var liters=document.getElementById("calcvar").value;

    //rounds off the calculation with the 2nd decimal point
    const calculate = (Number(petrol) * Number(liters)).toFixed(2);
    document.getElementById("result").innerHTML= "Your total cost is: £" + calculate; //changes the number 0 in paragraph to the calculated result
}