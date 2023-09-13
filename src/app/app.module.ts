import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CarrelloComponent } from './carrello/carrello/carrello.component';
import { PagamentoComponent } from './carrello/pagamento/pagamento.component';
import { AnnullamentoComponent } from './carrello/annullamento/annullamento.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CarrelloComponent,
    PagamentoComponent,
    AnnullamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
