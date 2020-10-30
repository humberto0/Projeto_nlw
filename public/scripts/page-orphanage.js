const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get values from html
//create and add marker
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 16)// L é um objeto criado no java script no link do mapa
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
    popupAnchor: [170, 2]// localização do popup
})// modificar o icone do mapa


L.marker([lat,lng], {icon})//marcação na localização do popup
    .addTo(map)// adiciona no mapa
    .openPopup()//abra o popup
//remover todas as classes active s
function selectImage(event) {

    const button = event.currentTarget
    const buttons = document.querySelectorAll('.images button')

    buttons.forEach((button) => {
        button.classList.remove('active')
    })
    //adicionar a classe active para o botão clicado
    button.classList.add('active')


    //selecionara a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    //atualizar o container de imagem
    imageContainer.src = image.src

}