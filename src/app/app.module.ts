import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { HomeComponent } from './components/home/home.component';
import { ReloadComponent } from './components/reload/reload.component';
import { CookieService } from 'ngx-cookie-service';
import { RulesComponent } from './components/rules/rules.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IconItemComponent } from './components/icon-item/icon-item.component';
import { LiveComponent } from './components/live/live.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ExpansionsComponent } from './components/expansions/expansions.component';
import { StructureItemComponent } from './components/structure-item/structure-item.component';
import { StructureModalComponent } from './components/structure-modal/structure-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartReloadComponent } from './components/cart-reload/cart-reload.component';
import { TotalComponent } from './components/total/total.component';
import { PaypalModalComponent } from './components/paypal-modal/paypal-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginModalComponent,
    RegisterModalComponent,
    HomeComponent,
    ReloadComponent,
    RulesComponent,
    AccountComponent,
    ProfileComponent,
    IconItemComponent,
    LiveComponent,
    WikiComponent,
    CardItemComponent,
    ExpansionsComponent,
    StructureItemComponent,
    StructureModalComponent,
    CartComponent,
    CartItemComponent,
    CartReloadComponent,
    TotalComponent,
    PaypalModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
