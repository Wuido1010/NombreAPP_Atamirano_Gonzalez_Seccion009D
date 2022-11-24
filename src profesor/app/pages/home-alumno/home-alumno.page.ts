import { Component, OnInit } from '@angular/core';
import { FeriadosService } from '../../services/feriados.service';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
getdata:any[]=[];
  constructor( public _services: FeriadosService) { 
    this._services.getdata<any[]>("").subscribe(data =>{
      this.getdata = data
      console.log(this.getdata)
    }
    )
  }

  ngOnInit() {
  }

}
