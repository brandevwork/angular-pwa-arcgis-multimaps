import { Component, OnInit } from '@angular/core';
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-arcgis-multimaps';

  constructor() { }

  ngOnInit(): void {
    // const map = new EsriMap({
    //   basemap: 'streets',
    // });
    // const view = new MapView({
    //   container: 'viewDiv',
    //   center: [-4.6417656, 57.2741432], //Longitude, Latitude
    //   zoom: 11,
    //   map,
    // });
  }

}
