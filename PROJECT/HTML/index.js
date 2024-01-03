document.addEventListener("DOMContentLoaded", function () {
    const text = "Традиционна българска кухня";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginBtn.onclick = function() {
        loginForm.classList.toggle('show');
        registerForm.classList.remove('show'); 
    };

    registerBtn.onclick = function() {
        registerForm.classList.toggle('show');
        loginForm.classList.remove('show'); 
    };
    
    
});

document.querySelectorAll('.auth-buttons button').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });