const inputSearch = document.querySelector('#search');
const formElement = document.querySelector('.form');

function getCep(event) {
    event.preventDefault();
    const search = inputSearch.value.replace('-', '');
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => {

                    const getDiv = document.querySelector('.box__result');
                    getDiv.innerHTML = `<ul>
                    <li>Logradouro: ${data.logradouro}</li>
                    <li>Complemento: ${data.complemento}</li>
                    <li>Bairro: ${data.bairro}</li>
                    <li>UF: ${data.uf}</li>
                    <li>DDD: ${data.ddd}</li>
                    </ul>
                    
                    `
                })

            if (inputSearch.value != "") {
                inputSearch.value = "";
            }


        })
};

function maskCep() {
    const mask = inputSearch;
    if (mask.value.length == 5) {
        mask.value += '-';
    }
}

function fieldNumber() {
    const regExp = /[^0-9-]/;
    var dataInput = inputSearch;
    if (regExp.test(dataInput.value)) {
        dataInput.value = "";
    }
}


formElement.addEventListener('submit', getCep);
formElement.addEventListener('keyup', maskCep);
formElement.addEventListener('keyup', fieldNumber);






















/* window.addEventListener('load', () => {
    //CONSTANTES CRIADAS PARA MANIPULAR ELEMENTOS HTML
    const inputSearch = document.querySelector('#search');
    const formElement = document.querySelector('.form');


    //FUNÇÃO PARA CONSULTA API VIA CEP
    function getCep(event) {
        event.preventDefault();
        let search = inputSearch.value.replace('-', '');
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then(response => {
                response.json()
                    .then(data => showDataUser(data))
            })
            .catch(e => console.log('error' + e))
    }

    //FUNÇÃO QUE CRIA ESTRUTURA HTML E INSERI FORA DA TAG FORMULARIO.
    function createStructureHTML() {
        const divElement = document.createElement('div');
        divElement.classList.add('box__result');
        formElement.insertAdjacentElement('afterend', divElement);

    }

    //FUNÇÃO PARA MOSTRAR OS DADOS NA TELA PARA O USUÁRIO
    function showDataUser(data) {

        createStructureHTML(data);
     

    }

    //FUNÇÃO PARA LIMPAR O CAMPO INPUT ASSIM QUE O MESMO FOR SUBMETIDO
    function clearInputSearch() {
        if (inputSearch.value != "") {
            inputSearch.value = "";
        }
    }


    //FUNÇÃO PARA MOSTRAR OS DADOS AO PRESSIONAR A TECLA "ENTER"
    function showkeyUp() {
        if (inputSearch.keyCode === 13) {
            getCep()
        }
    }





    //EVENTOS EXECUTADOS APÓS UMA AÇÃO DO USUÁRIO.
    formElement.addEventListener('submit', getCep);
    formElement.addEventListener('submit', createStructureHTML);
    formElement.addEventListener('keyup', showkeyUp);
    formElement.addEventListener('submit', showDataUser);


}); */