import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InputValidationComponent } from './_form/input-validation/input-validation.component';
import { DateInputComponent } from './_form/date-input/date-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HeaderComponent } from '../components/layout/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    DefaultComponent,
    ToolbarComponent,
    FooterComponent,
    InputValidationComponent,
    DateInputComponent,
    ConfirmDialogComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-top-center' ,
      preventDuplicates: true
    }),
    RouterModule,
    BsDropdownModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    HomeComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    DefaultComponent,
    ToolbarComponent,
    FooterComponent,
    HttpClientModule,
    DateInputComponent,
    InputValidationComponent,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    InputValidationComponent,
    DateInputComponent,
    ConfirmDialogComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HeaderComponent,
    MaterialModule
  ]
})
export class ComponentModule { }
