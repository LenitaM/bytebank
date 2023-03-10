import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';



registerLocaleData(localPt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' }, 
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
