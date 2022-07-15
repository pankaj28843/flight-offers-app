import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FlightsModule } from './flights/flights.module';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./flights/flights.module').then((m) => m.FlightsModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule,
    MatNativeDateModule,
    FlightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
