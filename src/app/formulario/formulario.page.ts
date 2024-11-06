import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private file: File,
    private socialSharing: SocialSharing
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        try {
          this.item = JSON.parse(params['item']);
        } catch (error) {
          console.error("Erro ao analisar o parâmetro 'item':", error);
        }
      }
    });
  }

  saveAndShare() {
    const content = `
      Nome: ${this.item.title}
      Preço: ${this.item.price}
      Peso: ${this.item.weight}
      Descrição: ${this.item.description}
    `;

    const fileName = `${this.item.title.replace(/ /g, "_")}.txt`;
    const filePath = this.file.dataDirectory;

    // Escreve o conteúdo no arquivo
    this.file.writeFile(filePath, fileName, content, { replace: true }).then(() => {
      // Compartilha o arquivo
      this.socialSharing.shareViaWhatsApp("Confira as informações do produto:", filePath + fileName)
        .then(() => console.log("Compartilhado com sucesso!"))
        .catch(error => console.error("Erro ao compartilhar:", error));
    }).catch(error => {
      console.error("Erro ao salvar o arquivo:", error);
    });
  }
}
