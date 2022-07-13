import { NgModule } from '@angular/core';

import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';

@NgModule({
  declarations: [FlightsSearchComponent, FlightsListComponent],
  imports: [],
  providers: [],
  bootstrap: [],
})
export class FlightsModule {}
