function getContent() {
    var content = document.getElementById('contact-form');
    var contentText = content.value;
    window.open("mailto:manuelavivoda@gmail.com?subject=" + contentText);
}
