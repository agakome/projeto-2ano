document.getElementById('toggle-button').addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

const cadastro = document.querySelector('#cadastro').addEventListener('click', function(){
  modal.close(); //fechar modal
  window.location.href = '../HTML/index_cadastro.html';
});


        