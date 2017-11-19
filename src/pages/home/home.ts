import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  veterinarias : any = [
  {
    nombre: "EL UNIVERSO CANINO",
    estado: true,
    imagen: "/assets/imgs/5.png",
    price:  12000
  },
  {
    nombre: "CENTRO VETERINARIO GÉNESIS",
    estado: true,
    imagen: "/assets/imgs/4.jpg",
    price:  15000
  },
  {
    nombre: "MASCOTAS Y AMIGOS",
    estado: true,
    imagen: "/assets/imgs/2.jpg",
    price:  20000
  },
  {
    nombre: "CENTRO VETERINARIO MECHAS",
    estado: true,
    imagen: "/assets/imgs/1.png",
    price:  22000
  },
  {
    nombre: "CLINICA VETERINARIA BELEN",
    estado: false,
    imagen: "/assets/imgs/6.jpg",
    price:  11000
  },
  {
    nombre: "CENTRO VETERINARIO LA 30",
    estado: false,
    imagen: "/assets/imgs/3.jpg",
    price:  10000
  }]


  constructor(public navCtrl: NavController) {

  }


  verDetalle(vet) {
    this.navCtrl.push(DetallePage, {"vet": vet});
  }

}
