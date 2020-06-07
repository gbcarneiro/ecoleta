function populateUfs() {
  const ufSelect = document.querySelector('select[name=uf]')
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res => res.json())
    .then(states => {
      for (const state of states) {
        ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

populateUfs()

function getCities(event) {
  const citySelect = document.querySelector('select[name=city]')
  const stateInput = document.querySelector('input[name=state]')

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const ufValue = event.target.value
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true

  fetch(url).then(res => res.json()).then(cities => {
    for (const city of cities) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
    citySelect.disabled = false
  })

}

document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities)

//take the items that the user wants to collect 
const itemsToCollect = document.querySelectorAll('.items-grid li') 

for (const item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target
 
  //add the class 'selected'
  itemLi.classList.toggle('selected')

  //verify if exists sellected items, if it 
  //take the selected items 
  const itemId = itemLi.dataset.id
  
  const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId
    return itemFound
  })

  //if  already selected
  if(alreadySelected >= 0) {
    //turn off it

    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent 
    })
  
    selectedItems = filteredItems
  } else {
    //if not, add it 
    selectedItems.push(itemId)
  }

  console.log(selectedItems)

  //refresh the hidden imput 
  collectedItems.value = selectedItems 
}