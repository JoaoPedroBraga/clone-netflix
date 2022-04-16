
var urlFilme = `https://www.youtube.com/watch?v=eXsAkkPGHho`;
var urlInfo = `https://www.themoviedb.org/movie/414906-the-batman?language=pt-BR`;

var btn = document.querySelector("#btn1");
function openInNewTab(url) {
var win = window.open(url, '_blank');
win.focus();
}
btn.addEventListener('click', function() {

openInNewTab(urlFilme);
});

var btn = document.querySelector("#btn2");
function openInNewTab(url) {
var win = window.open(url, '_blank');
win.focus();
}
btn.addEventListener('click', function() {

openInNewTab(urlInfo);
});