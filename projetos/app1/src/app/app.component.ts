import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public jogoEmAndamento: boolean = true
	public mensagemEncerramento: string

	public encerrarJogo(tipo: string): void {
		if (tipo == 'vitoria') {
			this.mensagemEncerramento = 'Fim de jogo, você ganhou :D'
		} else {
			this.mensagemEncerramento = 'Fim de jogo, infelizmente você perdeu :('
		}

		this.jogoEmAndamento = false
	}
}
