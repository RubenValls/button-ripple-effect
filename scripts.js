const button = document.querySelector('#btn');

button.addEventListener('click', (event) => {
    
    console.log(event)
    console.log(button.getBoundingClientRect())
})