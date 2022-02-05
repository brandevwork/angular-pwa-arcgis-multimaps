import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { CoordsService } from '../../services/coords.service';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, LocationRoutingModule],
  exports: [LocationComponent],
  providers: [CoordsService]
})
export class LocationModule {}
