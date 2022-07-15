import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DateInputComponent } from './components/date-input/date-input.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { FlightsSearchResultComponent } from './components/flights-search-result/flights-search-result.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';
import { LocationInputComponent } from './components/location-input/location-input.component';
import { TravellerClassInputComponent } from './components/traveller-class-input/traveller-class-input.component';
import { TravellerCountInputComponent } from './components/traveller-count-input/traveller-count-input.component';
import { TravellerInputComponent } from './components/traveller-input/traveller-input.component';
import { FlightsSearchPageComponent } from './pages/flights-search-page/flights-search-page.component';

const routes: Route[] = [{ path: '', component: FlightsSearchPageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  declarations: [
    FlightsSearchComponent,
    FlightsListComponent,
    LocationInputComponent,
    DateInputComponent,
    TravellerInputComponent,
    TravellerCountInputComponent,
    TravellerClassInputComponent,
    FlightsSearchResultComponent,
    FlightsSearchPageComponent,
  ],
})
export class FlightsModule {}
