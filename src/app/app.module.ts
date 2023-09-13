import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CarrelloComponent } from './carrello/carrello/carrello.component';
import { PagamentoComponent } from './carrello/pagamento/pagamento.component';
import { AnnullamentoComponent } from './carrello/annullamento/annullamento.component';
import { ProductsInStockComponent } from './products/pages/products-in-stock/products-in-stock.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CarrelloComponent,
    PagamentoComponent,
    AnnullamentoComponent,
    ProductsInStockComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
