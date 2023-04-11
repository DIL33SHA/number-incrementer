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
    let display_save = document.getElementById('save')
    let display = document.getElementById('count')
    save_numbers.push(count)
    display_save.innerHTML = save_numbers
    display.innerHTML = 0 
    count = 0
}
function clear_save() {
    let display_save = document.getElementById('save')
    let display = document.getElementById('count')
    save_numbers.length = 0
    display_save.innerHTML = 'none'
    display.innerHTML = 0 
    count = 0
}

