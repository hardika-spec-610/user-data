import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({            // it is a decorator function used to define a module(modifies the behaviour of the class)
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, // provides essential services required for rendering the application in a web browser
    AppRoutingModule,   // custom module that defines the routing configuration
    ReactiveFormsModule,  // provides support for building reactive forms in Angular
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [UserTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
