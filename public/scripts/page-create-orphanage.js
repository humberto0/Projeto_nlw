const map = L.map('mapid').setView([-2.528903, -44.3020821], 16)// L é um objeto criado no java script no link do mapa
//Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.
// Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
//aqui eu vou ter também um array, que pode ser identificado pelo conjunto de []
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);
// esta adicionando no mapa
//primeira camada que vai receber o mapa
//criando o icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],// localização do icone
    iconAnchor: [29, 68],//onde ele vai estar ancorado
})// modificar o icone do mapa


let marker;
// cria e adiciona uma funcionalidade de marcar
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;// estou selicionando atraves de um seletor o input com nome lat e setando nele o valor da lat
    document.querySelector('[name=lng]').value = lat;// estou selicionando atraves de um seletor o input com nome lng e setando nele o valor da lng

    //remover icone
    marker && map.removeLayer(marker)//se for verdadeiro ou seja se existir uma marca, ela deve ser removida
    // *não precisa necessariamente de um if e else para fazer esse tipo de comparação


    //adicionar a funcionalidade de marcar com um icone no mapa em uma determinada localização
    marker = L.marker([lat, lng], {icon}).addTo(map)

})//quando clicar no mapa ele vai passar para dentro da funcionalidade do on (colocando o event la dentro (logitude e latitude))


//selecionar e adicionar as fotos
function addPhotoField() {
    //pegar o container de fotos#images
    const container = document.querySelector('#images')// guardando ele em memoria
    //pegar o container para duplicar .new-images
    const fieldContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adcionada
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio ,se sim não adicionar ao container de fotos
    const input = newFieldContainer.children[0]
    if (input.value === '') {
        return
    }
    //limpar o campo antes de adicionar o container de imagens
    newFieldContainer.children[0].value = ''
    //adicionar o clone ao container de images
    container.appendChild(newFieldContainer)
}

//função para deletar a foto
function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ''
        return
    }
    //deletar o campo
    span.parentNode.remove()
}

//troca de sim e não
function toggleSelect(event) {
    //retirar a class .active(dos botoes) para cada botão ele retira a class active
    document.querySelectorAll('.button-select button')
        .forEach(function (button) {
            button.classList.remove('active')
        })
    //colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //pegar o botão clicado
    //verificar se é sim ou não
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
    //colocar a class .active

}

function validate(event) {
    //validar se lat e lng estão preenchidos
    const needsLatAndLng = false;
    if (needsLatAndLng) {
        event.preventDefault()
        alert('selecione um ponto no mapa')
    }

}