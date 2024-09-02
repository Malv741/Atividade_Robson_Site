document.getElementById('emailButton').addEventListener('click', function() {
    var campoEmail = document.getElementById('campoEmail').value;
    var email = campoEmail;
    var subject = 'Interesse em Produto';
    var body = 'Olá, possuo interesse em um produto que vocês oferecem.';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
});