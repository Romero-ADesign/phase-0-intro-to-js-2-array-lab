const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const coolCats = [...cats, "Broom"]
    return coolCats
} 

function prependCat() {
    const coolCats = ["Arnold", ...cats]
    return coolCats
} 

function removeLastCat() {
    const coolCats = [...cats.slice(0, 2)]
    return coolCats
}

function removeFirstCat() {
    const coolCats = [...cats.slice(1)]
    return coolCats
}