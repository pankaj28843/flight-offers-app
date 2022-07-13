import { NgModule } from '@angular/core';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';

@NgModule({
  declarations: [FlightsSearchComponent, FlightsListComponent],
  imports: [],
  providers: [],
  bootstrap: [],
})
export class FlightsModule {}
