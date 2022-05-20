const defaultQuotes = [
    ' “You’re off to great places, today is your day. Your mountain is waiting, so get on your way.” ',
    ' “You always pass failure on the way to success.” ',
    ' “No one is perfect - that’s why pencils have erasers.” ',
    ' “Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.” ',
    ' “You’re braver than you believe, and stronger than you seem, and smarter than you think.” ',
    ' “It always seems impossible until it is done.” ',
    ' “Keep your face to the sunshine and you cannot see a shadow.” ',
    ' “Once you replace negative thoughts with positive ones, you’ll start having positive results.” ',
    ' “Positive thinking will let you do everything better than negative thinking will.” ',
    ' “In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.” ',
    ' “When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.” ',
    ' “The more you praise and celebrate your life, the more there is in life to celebrate.” ',
    ' “Let your unique awesomeness and positive energy inspire confidence in others.” ',
];
window.onload = function () {
    main();
}

function main() {
    let newQuoteBtn = document.getElementById('new-quote-btn');
    let quoteBody = document.getElementById('quote-body');

    newQuoteBtn.addEventListener('click', function () {
        let index = Math.floor(Math.random() * defaultQuotes.length);
        let quote = defaultQuotes[index];
        quoteBody.innerText = quote;
    });
}