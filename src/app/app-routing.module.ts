import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReloadComponent } from './components/reload/reload.component';
import { RulesComponent } from './components/rules/rules.component';
import { AccountComponent } from './components/account/account.component';
import { LiveComponent } from './components/live/live.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { ExpansionsComponent } from './components/expansions/expansions.component';
import { CartComponent } from './components/cart/cart.component';
import { CartReloadComponent } from './components/cart-reload/cart-reload.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reload',
    component: ReloadComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'expansions',
    component: ExpansionsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart-reload',
    component: CartReloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
