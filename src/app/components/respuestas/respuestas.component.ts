import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  resultados:any[] = []

  constructor(private service: UserService, private route: Router) { 
    this.obtenerdatisgrafico();
  }
  loading = true;

  label1: any[] = [];
  datap1: any[] = [];

  label2: any[] = [];
  datap2: any[] = [];

  label3: any[] = [];
  datap3: any[] = [];


  label4: any[] = [];
  datap4: any[] = [];

  label5: any[] = [];
  datap5: any[] = [];

  label6: any[] = [];
  datap6: any[] = [];

  typebar = 'bar';
  typeline = 'line';
  configGrafi = {
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ],
  borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 1
  };

  grf1() { 
       
    return {
      data : {
        labels: this.label1,
        datasets: [
          {
            label: "Genero encuestados",
            data: this.datap1,     
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1                                    
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap1.reduce((a, b) => (a + b), 0))/this.datap1.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }


  grf2() { 
       
    return {
      data : {
        labels: this.label2,
        datasets: [
          {
            label: "Semestre encuestados",
            data: this.datap2,  
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1                                                                    
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap2.reduce((a, b) => (a + b), 0))/this.datap2.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }

  grf3() { 
       
    return {
      data : {
        labels: this.label3,
        datasets: [
          {
            label: "Es propietario de una computadora personal",
            data: this.datap3,              
          borderWidth: 3                
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap3.reduce((a, b) => (a + b), 0))/this.datap3.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }

  grf4() { 
       
    return {
      data : {
        labels: this.label4,
        datasets: [
          {
            label: "Frecuencia de acceso a internet",
            data: this.datap4,                 
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap4.reduce((a, b) => (a + b), 0))/this.datap4.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }

  grf5() { 
       
    return {
      data : {
        labels: this.label5,
        datasets: [
          {
            label: "Frecuencia de acceso a la pagina web de la universidad",
            data: this.datap5,     
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1              
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap5.reduce((a, b) => (a + b), 0))/this.datap5.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }

  grf6() { 
           
    return {
      data : {
        labels: this.label6,
        datasets: [
          {
            label: "Navegador web más utilizado",
            data: this.datap6,                 
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: ((this.datap6.reduce((a, b) => (a + b), 0))/this.datap6.length)*2,
                  min: 0
              }
          }]
      },
      }
    } 
  }

  ngOnInit(): void {
    this.obtenerResultados();
    
  }

  obtenerdatisgrafico() {
    
    this.service.obtenerData().subscribe((res: any) => {
      console.log('nada');
      this.loading = false;  
      console.log(res.data);   
      res.data.p1.forEach((element:any) => {
        this.label1.push(element.genero);
        this.datap1.push(element.cant);
      })    
      res.data.p2.forEach((element:any) => {
        this.label2.push(element.semestre);
        this.datap2.push(element.cant);
      })   
      
      res.data.p3.forEach((element:any) => {
        this.label3.push(element.compu_propio);
        this.datap3.push(element.cant);
      })   

      res.data.p4.forEach((element:any) => {
        this.label4.push(element.frecuencia_internet);
        this.datap4.push(element.cant);
      })   

      res.data.p5.forEach((element:any) => {
        this.label5.push(element.frecuencia_pag_udenar);
        this.datap5.push(element.cant);
      })  
      
      res.data.p6.forEach((element:any) => {
        this.label6.push(element.navegador);
        this.datap6.push(element.cant);
      }) 

      console.log(res);      
    }, err => {
      this.loading = false;
      console.log(err);      
    })
  }

  obtenerResultados() {

    if(sessionStorage.getItem('email') == null) {
      alert("No se encontro email, ingrese nuevamente");
      this.route.navigate(['/']);           
    }
    let respuestas = sessionStorage.getItem("respuestas");
    if(respuestas == null) {
      alert("No tiene resultados")
      return;
    }
    try {
      this.resultados = JSON.parse(respuestas);
    } catch (error) {
      console.log("Error al obtener respuestas");

    }      
  }

  obtener(index: number) {
    return `item.p${index+1}`;
  }

}
