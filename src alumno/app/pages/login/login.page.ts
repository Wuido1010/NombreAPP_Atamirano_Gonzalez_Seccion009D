import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private fb: FormBuilder, private toast : ToastController) { 
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)                
                })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('inicio');
          this.showToast('Bienvenido a RegistrAPP Estudiante: '+ obj.nomUsuario);
        }
      }//findelfor
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 3500
    })
    await toast.present();
  }
}
