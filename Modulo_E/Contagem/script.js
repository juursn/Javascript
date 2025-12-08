function contagem() {
	//Chamando os itens
	const txtini = document.querySelector('input#txtini');
	const txtfim = document.querySelector('input#txtfim');
	const txtqut = document.querySelector('input#txtqut');
	const resu = document.querySelector('div#resu');

	//Convertendo valores
	let ini = Number(txtini.value);
	let fim = Number(txtfim.value);
	let qut = Number(txtqut.value);

	resu.innerHTML = '';

	//Tratando erro de valores inseridos
	if (txtini.value.length == 0 || txtfim.value.length == 0) {
		window.alert('[ERRO] Digite um valor válido');

		//Substituindo quantidade do 'passo' caso seja 0 ou menor
	} else {
		if (qut <= 0) {
			qut = 1;
			resu.innerHTML =
				'A quantidade foi considerada como 1...A contagem continua!';
			//Iniciando Loops
		} else {
			if (ini < fim) {
				for (ini; ini < fim; ini += qut) resu.innerHTML += `${ini}➡️`;
			} else {
				for (fim; ini >= fim; ini -= qut) resu.innerHTML += `${ini}➡️`;
			}
		}
	}
	resu.innerHTML += `❎`;
}
