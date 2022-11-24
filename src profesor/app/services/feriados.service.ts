import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor( public _http: HttpClient) { 

  }
getdata<T> (url : string) {
  url = 'https://apis.digital.gob.cl/fl/feriados/2022'
  return this._http.get<T[]>(url);
}

}
