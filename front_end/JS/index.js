let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click', 
   async(event)=>{
      event.preventDefault()
      let usuario = document.querySelector('#Nome').value
      let senha = document.querySelector('#senha').value
      if(usuario != '' && senha != '')
      {
         let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
         if(resposta.status == 200)
         {
            alert('Bem vindo!')
            let mensagem = await resposta.json();
            window.location.href = '../HTML/galeria.html';
         }
         else{
            alert('Usuario ou senha incorretos!')
         }
      }
      else{
         alert('Preencha todos os campos!')
      }
   }
)
//////////////////////////////////////////////////////////////////////////////////////////////////


const openButtons = document.querySelectorAll('.open-modal');
openButtons.forEach((button) => { //pega qual dos botões foram selecionados da class .open-modal

  button.addEventListener("click", () => { //arrow function pegar algo - no caso clique do botão
    const modalId = button.getAttribute("data-modal"); //especificar qual ATRIBUTO - data-modal foi pego 
    const modal = document.getElementById(modalId); //especificar qual elemento por ID foi pego 
    modal.showModal(); //show ou showModal

  });
});


const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach((button)=>{

    button.addEventListener('click', () =>{
        const modalId = button.getAttribute("data-modal"); 
        const modal = document.getElementById(modalId); 
        modal.close(); //fechar modal
    })

})
 

