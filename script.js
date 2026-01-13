document.addEventListener('DOMContentLoaded', () => {
    const midtermInput = document.getElementById('midterm');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultValue = document.getElementById('result-value');

    const calculate = () => {
        const midterm = parseFloat(midtermInput.value);

        if (isNaN(midterm)) {
            alert('Lütfen geçerli bir vize notu giriniz.');
            return;
        }

        if (midterm < 0 || midterm > 100) {
            alert('Lütfen 0 ile 100 arasında bir not giriniz.');
            return;
        }

        // Formula: final = (50 - ( vize x 0.40))/0.60
        let requiredFinal = (50 - (midterm * 0.40)) / 0.60;

        // Ensure we don't show negative values (if user already passed)
        if (requiredFinal < 0) {
            requiredFinal = 0;
        }

        // Display results
        resultValue.innerText = requiredFinal.toFixed(2);
        resultContainer.classList.add('show');

        // Animation punch
        resultValue.style.animation = 'none';
        resultValue.offsetHeight; // trigger reflow
        resultValue.style.animation = 'pulse 0.5s ease';
    };

    calculateBtn.addEventListener('click', calculate);

    midtermInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculate();
        }
    });
});

// Add CSS keyframe for pulse animation via JS to keep CSS clean
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); color: #6366f1; }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
