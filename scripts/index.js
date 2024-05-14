// https://www.youtube.com/watch?v=W5oawMJaXbU

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".nav-about").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-skills").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-experience").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-projects").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-contact").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}