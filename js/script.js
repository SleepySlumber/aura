// JavaScript for Fitness Aura website
document.addEventListener('DOMContentLoaded', function() {
    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
            const weight = parseFloat(document.getElementById('weight').value);
            if (height > 0 && weight > 0) {
                const bmi = (weight / (height * height)).toFixed(2);
                let category = '';
                if (bmi < 18.5) category = 'Underweight';
                else if (bmi < 25) category = 'Normal weight';
                else if (bmi < 30) category = 'Overweight';
                else category = 'Obese';
                document.getElementById('bmiResult').textContent = `Your BMI is ${bmi} (${category})`;
            } else {
                document.getElementById('bmiResult').textContent = 'Please enter valid height and weight.';
            }
        });
    }

    // Calorie Calculator (simplified Harris-Benedict equation)
    const calorieForm = document.getElementById('calorieForm');
    if (calorieForm) {
        calorieForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;
            const activity = document.getElementById('activity').value;
            // Simplified: assuming average height/weight for BMR
            let bmr = gender === 'male' ? 88.362 + (13.397 * 70) + (4.799 * 170) - (5.677 * age) : 447.593 + (9.247 * 60) + (3.098 * 170) - (4.330 * age);
            let multiplier = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725 }[activity];
            const calories = Math.round(bmr * multiplier);
            document.getElementById('calorieResult').textContent = `Estimated daily calorie needs: ${calories} kcal`;
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon. (This is a demo, no email sent)');
            contactForm.reset();
        });
    }

    // Get Started Button
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            window.location.href = 'workouts.html';
        });
    }
});