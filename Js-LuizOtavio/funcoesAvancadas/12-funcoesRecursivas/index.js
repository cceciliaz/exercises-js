// funcoes recursivas sao aquelas que se chamam de volta
function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);