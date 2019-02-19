import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  addAnimeGroup: FormGroup;
  dadosImage: object[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
  ) {
    this.addAnimeGroup = new FormGroup({});
  }

  ngOnInit() {
    this.addAnimeGroup = this.formBuilder.group({
      nome_anime: [''],
      descricao_anime: [''],
      imageUpload: ['']
    });
  }

  addAnime() {
    const values = this.addAnimeGroup.value;
    let dados = [];
    dados.push(values, ...this.dadosImage);
    console.log('dados: ', dados);
    this.cadastroService.insertAnime(dados).then(val => {
      console.log('Sucesso!', val);
    }).catch(error => {
      console.error('Ocorreu o seguinte erro ao salvar o anime!', error);
    })
  }


  uploadFile(event) {
    let dados = event.target.files[0];
    this.dadosImage.push(dados);
  }

}
