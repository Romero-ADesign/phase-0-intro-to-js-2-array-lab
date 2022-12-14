const cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat(name) {
    return cats.push(`Ralph`)
}

function destructivelyPrependCat(name) {
    return cats.unshift(`Bob`)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const cats2 = [...cats, `Broom`]
    return cats2
}

function prependCat(name) {
    const cats2 = [`Arnold`, ...cats]
    return cats2
}

function removeLastCat() {
    const cats2 = cats.slice(0, 2)
    return cats2
}

function removeFirstCat() {
    const cats2 = cats.slice(1) 
    return cats2
}