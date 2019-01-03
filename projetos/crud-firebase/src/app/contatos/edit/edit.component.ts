import { Component, OnInit } from '@angular/core';

import { Contato } from '../shared/contato'
import { ContatoService } from '../shared/contato.service'
import { ContatoDataService } from '../shared/contato-data.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	public alert: boolean = false
	public mensagemAlert: string = ''

	public contato: Contato
	public key: string = ''

	constructor(
		private contatoService: ContatoService,
		private contatoDataService: ContatoDataService
	) { }

	ngOnInit() {
		this.contato = new Contato()
	}

	public onSubmit() {
		if (this.key) {
			this.contatoService.update(this.contato, this.key)

			this.alert = true
			this.mensagemAlert = 'Contato atualizado com sucesso!'
		} else {
			this.contatoService.insert(this.contato)

			this.alert = true
			this.mensagemAlert = 'Contato cadastrado com sucesso!'
		}

		this.contato = new Contato()

		// removendo a mensagem de alert
		setTimeout(() => {
			this.alert = false
		}, 4000)
	}

}
