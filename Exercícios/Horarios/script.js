const data = new Date();
const horari = data.getHours();
const minu = data.getMinutes();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const sem = data.getDay();

function carregar() {
	const hora = document.querySelector('div#hora');
	const datas = document.querySelector('div#datas');
	const foto = document.querySelector('img#foto');
	const fundo = document.querySelector('body');
	let semana = sem;
	switch (sem) {
		case 0:
			semana = 'Domingo';
		case 1:
			semana = 'Segunda';
		case 3:
			semana = 'Terça';
		case 4:
			semana = 'Quarta';
		case 5:
			semana = 'Quinta';
		case 6:
			semana = 'Sexta';
	}
	if (horari >= 5 && horari < 12) {
		fundo.classList.add('manha');
		hora.innerHTML = `<p>Agora são <strong>${horari}:${minu} </strong> horas</p>`;
		datas.innerHTML = `<p>${semana}, ${dia}/${mes}/${ano} </p>`;
		foto.src = 'img/manha.jpg';
	} else if (horari >= 12 && horari < 18) {
		fundo.classList.add('tarde');
		hora.innerHTML = `<p>Agora são <strong>${horari}:${minu} </strong> horas</p>`;
		datas.innerHTML = `<p>${semana}, ${dia}/${mes}/${ano} </p>`;
		foto.src = 'img/tarde.jpg';
	} else {
		fundo.classList.add('noite');
		hora.innerHTML = `<p>Agora são <strong>${horari}:${minu} </strong> horas</p>`;
		datas.innerHTML = `<p>${semana}, ${dia}/${mes}/${ano} </p>`;
		foto.src = 'img/noite.jpg';
	}
}
