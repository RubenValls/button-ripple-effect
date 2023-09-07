const button = document.querySelector('#btn');

button.addEventListener('click', (event) => {
    const ripple = document.querySelector('#ripple');
    ripple.style.height = 1;
    ripple.style.width = 1;
    ripple.style.left = event.x - button.getBoundingClientRect().x - 5;
    ripple.style.top = event.y - button.getBoundingClientRect().y - 7;
    let expandPixels = 1.75;

    let clickInterval = setInterval(() => {
        button.disabled = true;
        ripple.style.transform = `scale(${expandPixels})`
        expandPixels += 1.75;
    }, 2);
    setTimeout(() => { clearInterval(clickInterval); button.disabled = false;}, 1000);

    ripple.style.height = 1;
    ripple.style.width = 1;
    button.disabled = false;
})