
let cadastrar = document.querySelector('#cadEntrar')
cadastrar.addEventListener('click', 
   async(event)=>{
      event.preventDefault()
      let email = document.querySelector('#Email').value
      let senha = document.querySelector('#senha').value
      if(email == '' && senha == '')
      {
        alert('Preencha os campos!!!!')
      }
      else{
        let resposta = await fetch('http://localhost:3000/usuario/novo',{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          })
         })
         alert('Usuário cadastrado')
         window.location.href = '../HTML/index.html';
      }
    });