


    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        document.querySelector('.theme-toggle .moon').style.display = 
            document.body.classList.contains('dark-theme') ? 'none' : 'inline';
        document.querySelector('.theme-toggle .sun').style.display = 
            document.body.classList.contains('dark-theme') ? 'inline' : 'none';
    }

    function typeText(text, element, delay = 100) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, delay);
            }
        }
        typing();
    }

    document.addEventListener("DOMContentLoaded", function() {
        const textElement = document.getElementById("typing-text");
        const greeting = textElement.querySelector('.greeting').textContent;
        const name = textElement.querySelector('.name').textContent;
        textElement.innerHTML = '<span class="greeting"></span><span class="name"></span>';
        typeText(greeting, textElement.querySelector('.greeting'));
        setTimeout(() => {
            typeText(name, textElement.querySelector('.name'));
        }, greeting.length * 100);
        
    });
  
    window.onload = function() {
let englishWidth = 0;
let arabicWidth = 0;

const englishInterval = setInterval(function() {
    if (englishWidth < 70) { // نسبة الإنجليزي
        englishWidth++;
        document.querySelector('.lang-progress').style.width = englishWidth + '%';
    } else {
        clearInterval(englishInterval);
    }
}, 50); // تأخير كل 50 مللي ثانية

const arabicInterval = setInterval(function() {
    if (arabicWidth < 100) { // نسبة العربي
        arabicWidth++;
        document.querySelector('.lang-progress-arabic').style.width = arabicWidth + '%';
    } else {
        clearInterval(arabicInterval);
    }
}, 50); // تأخير كل 50 مللي ثانية
};
