const elements = document.querySelectorAll('.special');

function wrapLetterInSpan() {
    elements.forEach(element => {
 
        // Grab the inner text of each element
        let text = element.innerText;
        let spanWrapper = '';
    
        for (let i = 0; i < text.length; i++) {
          
            if (text[i] !== ' ') {
                spanWrapper += `<span class="effect">${text.charAt(i)}</span>`;
            } else {
                // If it's a space, then don't wrap it in a span and add a space as-is
                spanWrapper += ' ';
            }
        }
    
        element.innerHTML = spanWrapper;
    })
}

wrapLetterInSpan();

const letters = document.querySelectorAll(".effect");
const zoomLetter = document.getElementById("zoom-letter");
const gridLines = document.getElementById("grid-lines");

const kernLetters = ['y', 'u', 'w', 'n', 'v'];

letters.forEach(letter => {

    letter.onmouseover = function() {

        zoomLetter.style.opacity = 1;
        gridLines.style.opacity = 1;

        if(letter.textContent.includes('2') || letter.textContent.includes('0') || letter.textContent.includes('5') || letter.textContent.includes('–')) {
            zoomLetter.innerHTML = letter.textContent;
        } else {
            zoomLetter.innerHTML = letter.textContent.toUpperCase() + letter.textContent.toLowerCase();
        }
        // letter.style.opacity = "0.3";

        // if(kernLetters.includes(letter.textContent)) {
        //     zoomLetter.style.letterSpacing = "-0.08em";
        // } else {
        //     zoomLetter.style.letterSpacing = "-0.04em";
        // }
    }

    letter.onmouseout = function() {
        zoomLetter.style.opacity = 0;
        gridLines.style.opacity = 0;

        // setTimeout(() => {
        //     letter.style.opacity = "1";
        // }, 1000)
    }
})