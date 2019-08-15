var n1 = 10;
var n2 = 20;
var n3 = 30;
var fMedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 7; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("" + fMedia(n1, n2));
