function calculateAge() {
    const birthday = new Date(document.getElementById("birthday").value);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
  
    // Check for months and days (optional)
    const birthMonth = birthday.getMonth();
    const currentMonth = today.getMonth();
    let days = today.getDate() - birthday.getDate();
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && days < 0)) {
      age--;
    }
  
    const result = document.getElementById("result");
    if (isNaN(age)) {
      result.textContent = "Please enter a valid date.";
    } else {
      result.textContent = `Your age is ${age} years old.`;
    }
  }
  