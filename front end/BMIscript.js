document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Display BMI
    displayBMI(bmi);
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function displayBMI(bmi) {
    const bmiResultElement = document.getElementById('bmiResult');
    bmiResultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2);

    if (bmi > 30) {
        bmiResultElement.textContent += ' You have a little excess body fat ';
        bmiResultElement.textContent += ' we will try lose it for you           ' ;
        bmiResultElement.textContent += ' with  small diet.';
    }
}

function goToHomePage(){
    window.location.href = "home.html";
}
