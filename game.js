function drawChess(){
	let mainField = document.querySelector('.main-field');
	let block;

	let flag = true;


	for (let i = 0; i <8; i++) {
		for (let j = 0; j < 8; j++) {
			if (j == 0) flag = !flag;

			block = document.createElement('div');

			if (flag) block.className = 'block black';
			else	block.className = 'block white';

			mainField.appendChild(block);
			flag = !flag;
		}
	}
}

drawChess ();