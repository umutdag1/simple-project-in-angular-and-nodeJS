import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes : Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'showCustomers', component : ShowCustomersComponent },
  { path : 'showOrders', component : ShowOrdersComponent },
  { path : '**' , component : NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    ShowCustomersComponent,
    ShowOrdersComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
