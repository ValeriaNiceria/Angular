import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	public searchValue: string

	@Output() public searchEmmit: EventEmitter<string> = new EventEmitter


	constructor(
	) { }

	ngOnInit() {
	}

	public search(valor) {
		let valorSearch = valor.target.value
		
		this.searchEmmit.emit(valorSearch)
	}
}
