document.addEventListener("DOMContentLoaded", () => {

  let sendMessage = document.getElementById('sendMessage');

  sendMessage.addEventListener('click', (e) => {
    e.preventDefault();

    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    window.location.href = `mailto:RRolfes@alumni.stanford.edu?subject=${subject}&body=${message}`;
  });






});
