import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { AnimeService } from '../../services/anime/anime.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private animeService: AnimeService
  ) { }

  ngOnInit() {
  }

  selected_file = null
  onFileSelected(event) {
    this.selected_file = event.target.files[0]
  }

  onSendAnime(animeForm: NgForm) {
    console.log('Anime Form: ', animeForm)  
  }
}
