let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')

function colorAlert(e){
    e.preventDefault()

    alert('Rivers Favorite Color is Blue')
}

function placeAlert(e){
    e.preventDefault()

    alert('Rivers Favoite Place is The Big Island of Hawaii')
}

function ritualAlert(e){
    e.preventDefault()

    alert('Rivers Favorite Ritual is a Snickers Before every Lacrosse Game')
}

favColor.addEventListener('click', colorAlert)
favPlace.addEventListener('click', placeAlert)
favRitual.addEventListener('click', ritualAlert)