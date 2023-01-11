import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChallengeOneComponent } from './challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './challenge-two/challenge-two.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import {MatMenuModule} from '@angular/material/menu';
import { ChallengeModalComponent } from './challenge-modal/challenge-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeOneComponent,
    ChallengeTwoComponent,
    ChallengeModalComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTabsModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    NgxGraphModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
