import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingConst, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from './material/material.module';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from 'ng2-tooltip-directive';



 


 
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    AppRoutingConst,
    VerifyotpComponent,
    CreatepasswordComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTooltipModule,
    TooltipModule,
    // DropdownModule.forRoot()
    LottieModule.forRoot({player: playerFactory})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function playerFactory() {
  return player;
}
