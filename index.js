let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let array = drivers.concat(name);
    return array;
}

function prependDriver(name) {
    let array = [name, ...drivers];
    return array
}

function removeLastDriver() {
    let array = drivers.slice(0, drivers.length - 1)
    return array
}

function removeFirstDriver() {
    let array = drivers.slice(1, drivers.length)
    return array
}