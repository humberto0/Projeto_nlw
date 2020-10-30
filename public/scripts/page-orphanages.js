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
    popupAnchor: [170, 2]// localização do popup
})// modificar o icone do mapa
function addMarker({id, name, lat, lng}) {
    //create popup overlay
    const popup = L.popup({// propiedade e valores
        closeButton: false,// não mostrar o botão quando fechar
        className: 'map-popup',//nome da classe
        minWidth: 240,// largura minima
        minHeight: 240// altura minima
    }).setContent(`${name} <a href="/orphanage?${id}" > <img src="/images/seta.svg" alt="seta"> </a> `)// aqui eu estou abrindo o html

    L.marker([lat, lng], {icon})//marcação na localização do popup
        .addTo(map)// adiciona no mapa
        .bindPopup(popup)// liga o popup
        .openPopup()//abra o popup

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }
    addMarker(orphanage)
})