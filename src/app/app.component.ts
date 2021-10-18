import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica';

  // Para gerar a estrutura criei lista que recebe qualquer objeto no formato json e o proprio componente vai exportar esse dado para tela
  // Pois atividade se tratava de um laço dentro do arquivo .html. Que no meu caso utilizei o proprio app.component.html
  // criado pelo CLI angular no CMD  ng new ...

  listaAlunos: any[] = [
    { 
      nome: "Bruno Rocha Pereira",
      ru: "3335584",
      curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS"
    },
    { 
      nome: "André Silva Gomes",
      ru: "3334488",
      curso: "MEDICINA VETERINARIA"
    },
    { 
      nome: "Matheus Perillo de Souza",
      ru: "3332217",
      curso: "AGRONOMIA"
    },
    { 
      nome: "Yolanda Machado Borges",
      ru: "3336667",
      curso: "HISTÓRIA"
    },
    { 
      nome: "Diogo Martins Wagner",
      ru: "3337100",
      curso: "BIOMEDICINA"
    },
    { 
      nome: "Wagner Souza Pereira",
      ru: "3335666",
      curso: "AGRONOMIA"
    },
    { 
      nome: "Diogo Silva Martins",
      ru: "3331111",
      curso: "MEDICINA VETERINARIA"
    },
    { 
      nome: "Murilo de Souza Borges",
      ru: "3332222",
      curso: "AGRONOMIA"
    },
    { 
      nome: "Diogo Machado Martins",
      ru: "3334444",
      curso: "HISTÓRIA"
    },
    { 
      nome: "Felipe Coelho Oliveira",
      ru: "3335555",
      curso: "BIOMEDICINA"
    }
  ]
}
