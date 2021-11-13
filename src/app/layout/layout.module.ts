import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Font Awesome
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularMaterialModule } from '../utility-modules/angular-material.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class LayoutModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far);
  }
 }
