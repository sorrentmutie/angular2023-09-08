import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

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
import { StoreComponent } from './products/pages/store/store.component';
import { RandomUsersComponent } from './randomusers/pages/random-users/random-users.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductDetailsComponent } from './products/pages/product-details/product-details.component';
import { MyHeroComponent } from './forms/my-hero/my-hero.component';

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
    FooterComponent,
    StoreComponent,
    RandomUsersComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    MyHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
