document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById("dialog");

  const showButton = document.getElementById('contactMeBtn');

  const closeButton = document.getElementById("close_button");


  showButton.addEventListener("click", () => {
    dialog.showModal();
  });


  closeButton.addEventListener("click", () => {
    dialog.close();
  });





  const btnSend = document.getElementById('btn-send');
  const form = document.getElementById('form')

  btnSend.addEventListener('click', function (e) {
    e.preventDefault();


    const serviceID = 'service_j7inmdk';
    const templateID = 'template_rfzjyks';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        window.alert('Sent!');
        form.reset();
        dialog.close();

      })
      .catch((error) => {
        alert(JSON.stringify(error));
      })



  })
})