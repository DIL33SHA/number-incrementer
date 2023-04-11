let count = 0
let save_numbers = []

function increment() {
    let display = document.getElementById('count')
    count ++
    display.innerHTML = count
}
function decrement() {
    let display = document.getElementById('count')
    if (count > 0) {
        count --
        display.innerHTML = count
    }
    else{
        window.alert('Can not do decrement')
    }
}
function save() {
    let display = document.getElementById('save')
    save_numbers.push(count)
    display.innerHTML = save_numbers
}
function clear_save() {
    let display = document.getElementById('save')
    save_numbers.length = 0
    display.innerHTML = 'none'
    
}

