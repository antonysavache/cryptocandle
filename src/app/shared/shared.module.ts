import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";

const components = [
  SidebarComponent,
  HeaderComponent,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    components,
    MaterialModule,
  ]
})
export class SharedModule { }
