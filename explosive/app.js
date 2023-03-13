const enhance = id => {
  const element = document.getElementById(id),
    text = element.innerText.split(''); // split the text into an array of characters
    element.innerText = ''; // clear the element

    text.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
    });
}

enhance('channel-link');

//const fancy = document.querySelector('.fancy');