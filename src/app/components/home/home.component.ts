import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import WebMap from '@arcgis/core/WebMap';
import Sketch from '@arcgis/core/widgets/Sketch';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'angular-arcgis-multimaps';

  public view: any = null;
  // The <div> where we will place the map
  @ViewChild('mapView', { static: true }) private mapViewEl!: ElementRef;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        // id: 'aa1d3f80270146208328cf66d022e09c',
        id: 'e691172598f04ea8881cd2a4adaa45ba'
      },
    });

    const view = new MapView({
      container,
      map: webmap,
    });

    this.view = view;
    const gLayer = new GraphicsLayer();
    webmap.add(gLayer);

    const sketch = new Sketch({
      view,
      layer: gLayer
    });
    view.ui.add(sketch, "top-right");
    return this.view.when();
  }

  ngOnInit(): any {
    esriConfig.assetsPath = '/assets/';
    this.initializeMap()
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.destroy();
    }
  }
}
