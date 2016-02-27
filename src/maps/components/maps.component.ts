import {Component, ViewEncapsulation, OnInit} from 'angular2/core';
import {
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {PointsInterface} from '../../points/components/points.interface';
import {PointsService} from '../../api/points.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'sd-maps',
  moduleId: module.id,
  templateUrl: './maps.component.html',
  styles: [`
  .sebm-google-map-container {
    height: 500px;
  }
  `],
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  encapsulation: ViewEncapsulation.Native,
  providers: [PointsService, HTTP_PROVIDERS]
})

export class MapsComponent implements OnInit {

  constructor(public _pointsService: PointsService) {}

  // google maps zoom level
  zoom: number = 8;
  errorMessage: string = '';


  // initial center position for the map
  lat: number = 3.1333;
  lng: number = 101.7;

  markers: PointsInterface[] = [];


  getPoints() {this._pointsService.getPoints().subscribe(
    points => this.markers = points,
    error => this.errorMessage = <any>error
  );}
  ngOnInit() {
    this.getPoints();
  }

  clickedMarker(label: string, index: number) {
    window.alert(`clicked the marker: ${label || index}`);
    this.markers.splice(index, 1);
  }


  mapClicked($event: MouseEvent) {
    let marker = new PointsInterface();
    marker.lat = $event.coords.lat;
    marker.lng = $event.coords.lng;
    this.markers.push(marker);
    console.log('Submit Point', marker);
    this._pointsService.updatePoint(marker).subscribe();
  }

  markerDragEnd(m: PointsInterface, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
