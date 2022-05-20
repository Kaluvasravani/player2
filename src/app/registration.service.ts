import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{HttpClient} from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    return  this._http.post<any>("http://localhost:8073/login",user)

  }
  public registerUserFromRemote(user :User):Observable<any>{
    return  this._http.post<any>("http://localhost:8073/registeruser",user)

  }
}
