import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { CollapseModule } from 'ngx-bootstrap/collapse'

import { environment } from 'src/environments/environment'
import { BASE_URL } from './shared'

import { AppComponent } from './app.component'
import { HeaderComponent, FooterComponent } from './components'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: BASE_URL,
    useValue: environment.baseURL
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
