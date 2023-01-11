import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChallengeOneComponent } from './challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './challenge-two/challenge-two.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'ch-1', component: ChallengeOneComponent },
  { path: 'ch-2', component: ChallengeTwoComponent },

  { path: '**', redirectTo: 'home', }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
