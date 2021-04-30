import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'protractor';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  respuestas:any[] = [];

  rasgos:any[] = [];

  procesando: boolean = false;

  constructor(private route: Router, private serviceUser: UserService) {
    this.respuestas = [];
    this.rasgos = [];
    sessionStorage.removeItem("respuestas");
   }

  ngOnInit(): void {
  
  }


  radioChangeHandler(event:any, pregunta: string) {    
    let r = event.target.value;
    if(this.respuestas.length > 0) {
      this.respuestas.find((index, i) => {
        if(index.p === pregunta) {
          this.respuestas.splice(i, 1)
        }
      })
    }
    switch(pregunta) {
      case "p1":
        this.respuestas.push({p: pregunta, r})
        break;
      case "p2":
        this.respuestas.push({p: pregunta, r}) 
        break;
      case "p3":
        this.respuestas.push({p: pregunta, r})          
        break;
        case "p4":
      this.respuestas.push({p: pregunta, r})  
        break;
        case "p5":
      this.respuestas.push({p: pregunta, r})  
    }            
  }


  async determinarRasgoDePersonalidad() {
    if (this.respuestas.length < 5) {
      alert("Por favor complete todo el test")
      return;
    }
    this.rasgos = [];
    console.log("resppp");
    
    console.log( this.respuestas);
    
    this.respuestas.forEach(item => {
      if(item.p === "p1") {
        if (item.r === "option1") {
          this.rasgos.push({r: "Eres una persona Introvertida"})
        } else if (item.r === "option2") {
          this.rasgos.push({r: "Eres una persona Extrovertida"})
        } else {
          this.rasgos.push({r: "Eres una persona neutra"})
        }
      }

      if(item.p === "p2") {
        if (item.r === "option1") {
          this.rasgos.push({r: "Eres una persona que les gusta socializar, conversar y, en definitiva, sueles tener altas capacidades de liderazgo"})
        } else if (item.r === "option2") {
          this.rasgos.push({r: "Eres una persona que suele pasar más tiempo encerrado en su mundo interior. Es decir, no le gusta pasar tanto tiempo con grupos grandes de gente y, por lo general, no es tan asiduo a socializar."})
        } else {
          this.rasgos.push({r: "Eres una persona que en ocasiones te gusta relacionarte con los demás y tomar liderazgo"})
        }
      }

      if(item.p === "p3") {
        if (item.r === "option1") {
          this.rasgos.push({r: "Eres una persona muy generosa y amable"})
        } else if (item.r === "option2") {
          this.rasgos.push({r: "Eres una persona que en ocasiones demuestras generosidad y amabilidad"})
        } else {
          this.rasgos.push({r: "Eres una persona que no te gusta ser servicial con los demás"})
        }
      }

      if(item.p === "p4") {
        if (item.r === "option1") {
          this.rasgos.push({r: "Eres una persona organizada y meticulosa"})
        } else if (item.r === "option2") {
          this.rasgos.push({r: "Eres una persona que en ocasiones eres organizada y meticulosa"})
        } else {
          this.rasgos.push({r: "Eres una persona que no le gusta ser organizada"})
        }
      }

      if(item.p === "p5") {
        if (item.r === "option1") {
          this.rasgos.push({r: "Eres una persona que se preocupa mucho por los demás. esto en ocasiones puede tener repercusiones físicas, mentales y emocionales"})
        } else if (item.r === "option2") {
          this.rasgos.push({r: "Eres una persona que a veces se precupa por los demás. es decir, en las situaciones adversas las acoges con tranquilidad"})
        } else {
          this.rasgos.push({r: "Eres una persona que nunca se preocupa por los demás. "})
        }
      }
    });
    console.log(this.rasgos);
    await sessionStorage.removeItem('respuestas');

  sessionStorage.setItem('respuestas', JSON.stringify(this.rasgos));
  if(sessionStorage.getItem('email') != null) {
    let data = {
      email: sessionStorage.getItem('email'),
      data: this.rasgos,
    }
    this.registrarData(data);                  
  } else {
    alert("No se encontro email, ingrese nuevamente");
    this.route.navigate(['/']);          
  } 
  
  }

  registrarData(data: any) {
    this.procesando = true;
    this.serviceUser.registrarData(data).subscribe((res: any) => {
     if(res && !res.status) {
      alert("Algo inesperado paso al registrar los datos, intente nuevamente")
     } else {
      this.route.navigate(['resultados']); 
     } 
     this.procesando = false;
    }, err => {
      console.log(err);    
      this.procesando = false;
      alert("Algo inesperado paso al registrar la informacion")
    })
  }

}
