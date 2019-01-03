import { Component, OnInit } from '@angular/core';

import { Contato } from '../shared/contato'
import { ContatoService } from '../shared/contato.service'
import { ContatoDataService } from '../shared/contato-data.service'

import { Observable } from  'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public contatos: Observable<any>

	constructor(
		private contatoService: ContatoService,
		private contatoDataService: ContatoDataService
	) { }

	ngOnInit() {
		this.contatos = this.contatoService.getAll()
		console.log(this.contatoService.getAll())
	}

	public delete(key: string) {

	}


	public edit(contato: Contato, key: string) {

	}

}
