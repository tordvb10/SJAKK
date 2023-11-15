let body = document.querySelector("body")
console.log(body)
body.style.backgroundColor = "green"

let styleclass = {
    stable: "position: relative; display: flex; flex-flow: row nowrap; justify-content: space-around; align-items: center; align-content: space-between;",
    blokade: "position: relative; display: block; margin-left: auto; margin-right: auto;"
}

console.log(styleclass)

let div = {
    stable: createElement("div").style.cssText = styleclass.stable,
    blokade: createElement("div").style.cssText = styleclass.blokade
}


console.log(styleclass)
console.log(div)
body.appendChild(div.blokade.appendChild(div.stable.appendChild(div.blokade.style.cssText="widht: 100px; height: 100px;")))