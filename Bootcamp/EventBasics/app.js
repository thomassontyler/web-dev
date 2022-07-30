const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    
    document.body.style.backgroundColor = randomColor();
    document.querySelector('h1').textContent = `Random Color: ${randomColor()}`
})

const randomColor = function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

