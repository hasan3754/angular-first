import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MenuthreeComponent } from './menuthree/menuthree.component';
import { MenutwoComponent } from './menutwo/menutwo.component';
import { MenuoneComponent } from './menuone/menuone.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'menuone', component: MenuoneComponent },
  { path: 'menutwo', component: MenutwoComponent },
  { path: 'menuthree', component: MenuthreeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
