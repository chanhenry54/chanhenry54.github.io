var buttons = document.querySelectorAll('.show-button');

Array.prototype.forEach.call(buttons, function (button) {

    // add button listeners
    button.addEventListener('click', function () {
        var expandedText = this.parentElement.querySelector('.fulltext');
        var buttonText = this.querySelector('.button-text');

        if (expandedText.classList.contains('expand-text')) {
            buttonText.innerText = 'Show More';
            expandedText.classList.toggle('expand-text');
        } else {
            buttonText.innerText = 'Show Less';
            expandedText.classList.toggle('expand-text');
        }
    });
});