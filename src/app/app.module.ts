import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevelOneComponent } from './pages/level-one/level-one.component';
import { LevelTwoComponent } from './pages/level-two/level-two.component';
import { LevelThreeComponent } from './pages/level-three/level-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StringCalculatorComponent } from './string-calculator/string-calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    StringCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
