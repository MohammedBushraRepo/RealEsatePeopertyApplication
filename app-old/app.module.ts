import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/propperty-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user-service';
import { AlertifyService } from './services/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AuthService } from './services/auth.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './property/propperty-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

const appRoutes : Routes = [
  {path:'', component:PropertyListComponent},
  {path:'rent-property', component:PropertyListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path: 'property-detail/:id',
    component: PropertyDetailComponent,
    resolve: {prp: PropertyDetailResolverService}},
  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent},
  {path:'**', component:PropertyListComponent},


]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
    
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
    
    
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
