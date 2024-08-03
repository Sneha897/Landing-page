
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
});

// Add event listener to form submit
document.querySelector('#contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
});