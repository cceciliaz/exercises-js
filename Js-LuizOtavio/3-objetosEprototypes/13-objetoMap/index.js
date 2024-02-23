// ""
const pessoa = [
    {id: 3, nome: "ana"},
    {id: 2, nome: "bia"},
    {id: 1, nome: "maria"},
];

const NovasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    NovasPessoas.set(id, {...pessoa});
}

console.log(NovasPessoas.get(2));

// const NovasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     NovasPessoas[id] = {...pessoa};
// }