const alunos = [
    { nome: 'Diego', nota: 10 },
    { nome: 'José', nota: 9 }
]

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = a => a.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)