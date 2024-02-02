import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../component/footer/footer.component';
import { CardsComponent } from '../component/cards/cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { ProductListingComponent } from '../features/ecommerce/components/product-listing/product-listing.component';
import { ViewchildComponent } from '../features/viewChild&Children/components/viewchild/viewchild.component';
import { NgtemplatesComponent } from '../features/templates/components/ngtemplates/ngtemplates.component';
import { ContentChildParentComponent } from '../features/templates/components/content-child-parent/content-child-parent.component';
import { NgOnChangeComponent } from '../features/compoenentLifeCycleMethods/components/ng-on-change/ng-on-change.component';
import { Demo1Component } from '../features/demo/components/demo1/demo1.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from '../features/http/http.component';
// import { HttpService } from '../service/http/http.service';
// import { setBackground } from '../features/customDirective/setBackground';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HttpComponent,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    ViewchildComponent,
    NgtemplatesComponent,
    HeaderComponent,
    ContentChildParentComponent,
    Demo1Component,
    CardsComponent,
    NgOnChangeComponent,
    FooterComponent,
    ProductListingComponent,
  ],
  providers: [HttpClientModule],
})
export class AppComponent {
  // title = 'project1';
}
