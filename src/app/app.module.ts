import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BootstrapModule } from './bootstrap.module';
import { NoimagePipe } from './pipes/noimage.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { WeathercComponent } from './components/weatherc/weatherc.component';
import { CategoriesModule } from './components/categories/categories.module';
import { SearchComponent } from './components/search/search.component';
// import { NoimagecatPipe } from './pipes/noimagecat.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    NoimagePipe,
    FooterComponent,
    WeathercComponent,
    SearchComponent,
    // NoimagecatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    BootstrapModule,
    CategoriesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
