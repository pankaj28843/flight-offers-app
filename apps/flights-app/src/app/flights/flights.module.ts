import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Route, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';
import { LocationInputComponent } from './components/location-input/location-input.component';

const routes: Route[] = [{ path: '', component: FlightsSearchComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    FontAwesomeModule,
  ],
  declarations: [
    FlightsSearchComponent,
    FlightsListComponent,
    LocationInputComponent,
  ],
})
export class FlightsModule {}
