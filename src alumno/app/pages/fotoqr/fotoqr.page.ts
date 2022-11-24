import { Component, OnInit } from '@angular/core';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';



@Component({
  selector: 'app-fotoqr',
  templateUrl: './fotoqr.page.html',
  styleUrls: ['./fotoqr.page.scss'],
})
export class FotoqrPage implements OnInit {
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }
  
  async tomarFoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))


  }

  ngOnInit() {
    
  }

  
}
