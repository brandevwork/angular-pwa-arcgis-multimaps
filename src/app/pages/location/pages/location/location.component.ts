import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Home from '@arcgis/core/widgets/Home';
import { CoordsService } from '../../services/coords.service';
import { Coordinates } from '../models/coordinates.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, AfterViewInit {
  esriMap: Map | undefined;
  mapView: MapView | undefined;
  // userPosition: Coordinates = { lat: undefined, lon: undefined };
  userPosition: Coordinates = {lat: undefined, lon: undefined};

  @ViewChild('mapView', { static: true }) private mapViewEl:
    | ElementRef
    | undefined;

  constructor(private coordsService: CoordsService, private cdRef : ChangeDetectorRef) {  }

  AddHomeWidget = async () => {
    let homeWidget = new Home({ view: this.mapView });
    this.mapView?.ui?.add(homeWidget, 'top-left');
  };

  ngOnInit(): void {
    this.coordsService.storeUserLocation();
   }

  ngAfterViewInit(): void {
    let result = sessionStorage.getItem('coords');

    const initMap = async (lat: number, lon: number): Promise<any> => {
      const latStr = lat.toString();
      const lonStr = lon.toString();
      let userPosition = { lat: latStr, lon: lonStr };
      if (userPosition != this.userPosition) {
        this.userPosition = userPosition;
        this.cdRef.detectChanges();
      }

      this.userPosition = { lat: latStr, lon: lonStr };
      this.esriMap = new Map({
        basemap: 'streets-vector',
      });
      const mapViewProperties = {
        container: this.mapViewEl?.nativeElement,
        center: [lon, lat],
        zoom: 8,
        map: this.esriMap,
      };

      this.mapView = new MapView(mapViewProperties);
      await this.mapView.when();
      await this.AddHomeWidget();
    };

    if (result) {
      const userCoords = JSON.parse(result);
      initMap(userCoords.latitude, userCoords.longitude);
    } else {
      console.log('error retrieving user location coords');
    }
  }
}
