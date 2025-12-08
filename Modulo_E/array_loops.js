let val = [28, 26, 15, 19, 29, 3];

for (let pos = 0; pos < val.length; pos++) {
	console.log(`A posição ${pos} contem o valor: ${val[pos]}`);
}

console.log('*Versão simplificada*');

for (let pos in val) {
	console.log(`A posição ${pos} contem o valor ${val[pos]}`);
}
