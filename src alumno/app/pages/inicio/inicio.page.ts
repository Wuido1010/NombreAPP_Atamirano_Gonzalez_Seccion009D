import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController, private navcontroller: NavController) { }

  ngOnInit() {
    
  }


  mostrarMenu(){
    this.menuController.open('first');
  }
  async logout(){
    localStorage.removeItem('ingresado');
    this.navcontroller.navigateRoot('login');
  }

}
