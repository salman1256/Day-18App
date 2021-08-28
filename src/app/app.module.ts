import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CustPipeExComponent } from './cust-pipe-ex/cust-pipe-ex.component';
import { SqrPipe } from './sqr.pipe';
import { DcpPipe } from './dcp.pipe';
import { ExrCheckComponent } from './exr-check/exr-check.component';
import { WcupPipe } from './wcup.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    CustPipeExComponent,
    SqrPipe,
    DcpPipe,
    ExrCheckComponent,
    WcupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
