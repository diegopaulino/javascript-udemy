console.log('Primeiro "for"')
for (let letra of "Cod3r") {
    console.log(letra)
}

console.log('Segundo "for"')
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}

console.log('Terceiro "for"')
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

console.log('Quarto "for"')
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])
for (let assuntos of assuntosMap) {
    console.log(assuntos)
}

console.log('Quinto "for"')
for (let chaves of assuntosMap.keys()) {
    console.log(chaves)
}

console.log('Sexto "for"')
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

console.log('Sétimo "for"')
for (let [chave, valor] of assuntosMap) {
    console.log(chave, valor)
}

console.log('Oitavo "for"')
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}