import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {
  Player = new Player;
  players:Player[]=[];
  msg='';

  constructor(private service:PlayerService,private router:Router) { }

  ngOnInit(): void {
    // this.player=new Player();
    // this.playerName=this.route.snapshot.params['playerName'];
    
    
  }
  showPlayer(pName :string)
  {
    
    // return this.service.getPlayerByName().subscribe(
     return this.service.getPlayerByName(pName).subscribe(data=>
      {
        this.players=data;
        
      },
      error =>
      this.msg="player does not exist"
      );
  }

}
