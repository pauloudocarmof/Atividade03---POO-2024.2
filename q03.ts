function formatarArrayComTraco(arr: number[]): string {
  let resultado = "";
  arr.forEach((num, index) => {
    resultado += num;
    if (index < arr.length - 1) {
      resultado += "-";
    }
  });
  return resultado;
}
console.log(formatarArrayComTraco([1, 2, 3, 4])); 
