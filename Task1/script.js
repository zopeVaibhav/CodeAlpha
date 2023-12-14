function calculateAge() {
    // Get the input date
    const dobInput = document.getElementById("dob").value;
    
    // Check if a date is selected
    if (dobInput === "") {
        alert("Please select a date of birth.");
        return;
    }

    // Calculate age
    const dob = new Date(dobInput);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your age is ${age} years.`;
}

function resetForm() {
    // Reset the input and result
    document.getElementById("dob").value = "";
    document.getElementById("result").textContent = "";
}
