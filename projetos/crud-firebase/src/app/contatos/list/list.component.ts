import { Component, OnInit } from '@angular/core';

import { Contato } from '../shared/contato'
import { ContatoService } from '../shared/contato.service'
import { ContatoDataService } from '../shared/contato-data.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public contato: Contato

	constructor(
		private contatoService: ContatoService,
		private contatoDataService: ContatoDataService
	) { }

	ngOnInit() {
	}

}
