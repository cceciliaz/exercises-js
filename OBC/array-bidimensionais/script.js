// arrays bidimensionais são arrays de outros
const arr = [
    ["1 - nivel",
    "2 - nivel",
    "3 - nivel",
    "4 - nivel"],
    
    ["1 - nivel",
    "2 - nivel",
    "3 - nivel",
    "4 - nivel"],
    
    ["1 - nivel",
    "2 - nivel",
    "3 - nivel",
    "4 - nivel"]
]
console.log(arr)

const arr1 = [
    "1 nivel",
    ["2 nivel", 34, true],
    [
        ["3 nivel, 1 item", "ola, mundo"],
        ["3 nivel, 2 item", "ola mundo"],
    ],
    []
]
console.log([arr1[1][1]])

const matriz = [
    ["1 nivel, 1 item", " 1 nivel, segundo item"],
    ["2nivel, 1 item", "2 nivel, 2 item"],
    ["3 nivel, 1 item", "3 nivel, 2 item"]
]
matrix[1].push(matriz)