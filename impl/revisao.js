var n1 = 10;
var n2 = 20;
//let n3: number = 30
//let soma = (media1 + media2 + media3) / 3;
//let fMedia = function(nota1:number, nota2:number, nota3:number): number {
//   return (nota1 + nota2 + nota3) / 3
//}
var fMedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 7; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("" + fMedia(n1, n2));
