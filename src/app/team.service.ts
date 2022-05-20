import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  playerNames: string | undefined;
  teamName:string |undefined;
  

  constructor(private _http:HttpClient) { }
  getAllTeamName():any{
    return this._http.get<any>("http://localhost:8083/teamName");
 }

 public createTeamFromRemote(team:Team):Observable<any>
 {
   return this._http.post<any>("http://localhost:8083/createTeam",team);
 }
 public getPlayerByTeamName(teamName?:string):Observable<any>
  {
    return this._http.get<any>("http://localhost:8083/players/"+teamName)
  }



}
