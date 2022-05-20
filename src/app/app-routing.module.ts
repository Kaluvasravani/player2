import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { ShowPlayerComponent } from './show-player/show-player.component';
import { ShowTeamComponent } from './show-team/show-team.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'',component:RegistrationComponent},
  {path:'loginsuccess',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registersuccess',component:HomeComponent},
  {path:'createTeam',component:CreateTeamComponent},
  {path:'createPlayer',component:CreatePlayerComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'showTeam',component:ShowTeamComponent},
  {path:'showPlayer',component:ShowPlayerComponent},
  {path:'homePage',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
