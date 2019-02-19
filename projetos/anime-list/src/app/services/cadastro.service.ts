import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

	constructor(
		private db: AngularFireDatabase,
		private storage: AngularFireStorage
	) { }


	insertAnime(dados) {
		let id = this.db.createPushId();
		let imageUpload: Promise<any>;
		if (dados.imageUpload) {
			const imagemExt = dados[1]['name'].split('.').pop();
			const imagemRef = this.storage.storage.ref('/images/').child(`${id}.${imagemExt}`);
			imageUpload = new Promise(resolve => {
				imagemRef.put(dados[1]).then(() => {
					imagemRef.getDownloadURL().then(url => {
						dados[1] = url;
						resolve();
					});
				});
			});
		} else {
			dados.imageUpload = null;
			imageUpload = Promise.resolve();
		}


		return Promise.all([imageUpload]).then(() => {
			return this.db.database.ref(`/animes/`).set({
				nome_anime: dados[0].nome_anime,
				descricao_anime: dados[0].descricao_anime,
				img_anime: dados[0].imageUpload
			});
		});
	}

}
