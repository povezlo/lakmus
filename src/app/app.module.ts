import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { ToastrModule } from 'ngx-toastr'
import { CollapseModule } from 'ngx-bootstrap/collapse'

import { environment } from 'src/environments/environment'
import { ErrorInterceptor } from './shared/interceptors'
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
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.baseURL
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
