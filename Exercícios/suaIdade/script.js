function verificar() {
	const txtano = document.querySelector('input#txtnum');
	const resu = document.querySelector('div#resu');
	const data = new Date();
	const anoat = data.getFullYear();
	const ano = Number(txtano.value);
	if (txtano.value.lenght == 0 || ano > anoat) {
		window.alert('[ERROR] Valor inválido, tente novamente.');
	} else {
		const fsex = document.getElementsByName('sexo');
		const idade = anoat - ano;
		let gener = '';
		let faixa = '';
		const foto = document.createElement('img');
		foto.setAttribute('id', 'foto');
		if (fsex[0].checked) {
			gener = 'mulher';
			if (idade <= 12 && idade > 0) {
				foto.setAttribute('src', 'img/menina.jpg');
				faixa = 'criança';
			} else if (idade <= 18 && idade > 12) {
				foto.setAttribute('src', 'img/garota.jpg');
				faixa = 'adolescente';
			} else if (idade <= 59 && idade > 18) {
				foto.setAttribute('src', 'img/Mulher.jpg');
				faixa = 'adulta';
			} else {
				foto.setAttribute('src', 'img/Idosa.jpg');
				faixa = 'idosa';
			}
		} else if (fsex[1].checked) {
			gener = 'homem';
			if (idade <= 12 && idade > 0) {
				foto.setAttribute('src', 'img/menino.jpg');
				faixa = 'criança';
			} else if (idade <= 18 && idade > 12) {
				foto.setAttribute('src', 'img/garoto.jpg');
				faixa = 'adolescente';
			} else if (idade <= 59 && idade > 18) {
				foto.setAttribute('src', 'img/Homem.jpg');
				faixa = 'adulto';
			} else {
				foto.setAttribute('src', 'img/Idoso.jpg');
				faixa = 'idoso';
			}
		} else {
			window.alert('Preencha todo formulário e tente novamente.');
		}
		resu.innerHTML = `<p>Detectamos: ${gener}, ${faixa} de ${idade} anos.</p>`;
		resu.appendChild(foto);
	}
}
