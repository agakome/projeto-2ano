const searchInput = document.querySelector('#pesquisar-arv');
const org = document.querySelectorAll('.org');

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchInput.click();
    }
});

searchInput.addEventListener('click',()=>{
    const topo = document.querySelector('#topo');
    const termo = document.getElementById('barraPesquisa').value.toLowerCase();
    const cards_arvores = document.querySelectorAll('card-arvore');

    let encontrou = false;

    cards_arvores.forEach((card) => {
       if(card.childNodes[3].childNodes[1].innerText.toLowerCase() != termo)
       {
            card.style.display = 'none';
       }
       else{
            card.style.display = 'flex';
            encontrou = true;
       }
    });

    if (!encontrou) {
        topo.innerText = 'Nenhuma arvore encontrada com esse nome'
    }
    else{
        topo.innerText = "Arvores do Sesi"
    }
})
