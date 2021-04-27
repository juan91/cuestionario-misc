import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  resultados:any[] = []

  constructor() { }

  ngOnInit(): void {
    this.obtenerResultados();
  }

  obtenerResultados() {
    let respuestas = sessionStorage.getItem("respuestas");
    if(respuestas == null) {
      alert("No tiene resultados")
      return;
    }
    try {
      this.resultados = JSON.parse(respuestas);
        console.log(respuestas);
    } catch (error) {
      console.log("Error al obtener respuestas");

    }      
  }

  obtener(index: number) {
    return `item.p${index+1}`;
  }

}
