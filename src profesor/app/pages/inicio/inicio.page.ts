import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServicedatosService } from '../../services/servicedatos.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController, 
              private toastController: ToastController,
              private navController: NavController,
              private service: ServicedatosService) { }

  ngOnInit() {
    
  }


  mostrarMenu(){
    this.menuController.open('first');
  }
  async showToast(msg){ //mensaje bottom bienvenido
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000
    })
    await toast.present();
  }
  async CerrarSe(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
  }


}
