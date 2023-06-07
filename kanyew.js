function generateQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.kanye.rest', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var quote = JSON.parse(xhr.responseText).quote;
            document.getElementById('quote').textContent = quote;
        }
    };
    xhr.send();
}

function shareOnTwitter() {
    var quote = document.getElementById('quote').textContent;
    var siteUrl = 'https://vinihoudini.github.io'; 
    var tweetText = '"' + quote + '"  Veja mais em: ' + siteUrl;
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText);
    window.open(tweetUrl);
}
