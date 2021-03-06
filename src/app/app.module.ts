import { CartService } from './services/cart.service';
import { ManagerAuthGuardService } from './authorization/manager-auth-guard.service';
import { AdminAuthGuardService } from './authorization/admin-auth-guard.service';
import { UserService } from './authorization/user.service';
import { AuthGuardService } from './authorization/auth-guard.service';
import { AuthService } from './authorization/auth.service';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { RemoveBtnComponent } from './dishes/dish-details/remove-btn/remove-btn.component';
import { AddFormComponent } from './nav-bar/add-form/add-form.component';
import { CartStatusComponent } from './nav-bar/cart-status/cart-status.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarComponent } from './dishes/dish-details/star/star.component';
import { CartComponent } from './cart/cart.component';
import { DishComponent } from './dishes/dish-details/dish/dish.component';
import { OpinionFormComponent } from './dishes/dish-details/dish/opinion-form/opinion-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './home/contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LoginComponent } from './nav-bar/login/login.component';
import { SignUpComponent } from './nav-bar/sign-up/sign-up.component';
import { PersistenceComponent } from './admin-view/persistence/persistence.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { QuantityButtonsComponent } from './quantity-buttons/quantity-buttons.component';
import { ModifyDishComponent } from './manager-view/modify-dish/modify-dish.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailsComponent,
    NavBarComponent,
    RemoveBtnComponent,
    AddFormComponent,
    CartStatusComponent,
    StarComponent,
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    DishComponent,
    OpinionFormComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    PersistenceComponent,
    AdminViewComponent,
    ManagerViewComponent,
    QuantityButtonsComponent,
    ModifyDishComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,


  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    ManagerAuthGuardService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
