import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatCheckboxModule,
  MatOptionModule,
MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ClasificationComponent } from './results/clasification/clasification.component';
import { RoundResultComponent } from './results/round-result/round-result.component';
import { ResultComponent } from './results/result/result.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClasificationComponent,
    RoundResultComponent,
    ResultComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,   
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
