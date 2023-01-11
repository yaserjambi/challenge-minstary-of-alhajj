import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeOneComponent } from './challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './challenge-two/challenge-two.component';

const routes: Routes = [
  { path: 'ch-1', component: ChallengeOneComponent },
  { path: 'ch-2', component: ChallengeTwoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
