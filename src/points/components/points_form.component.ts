import {Component, OnInit} from 'angular2/core';
//import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
//import {PointsInterface} from './points.interface';
import {PointsService} from '../../api/points.service';

@Component({
  selector: 'points-form',
  templateUrl: 'points/components/points_form.component.html',
  providers: [
    HTTP_PROVIDERS,
    PointsService,
  ]
})
export class PointsForm implements OnInit {

  constructor(private _pointsService:PointsService) {}

  model = [];
  submitted = false;
  errorMessage: string = '';

  getPoints() {this._pointsService.getPoints().subscribe(
    points => this.model = points,
    error => this.errorMessage = <any>error
  );}

  ngOnInit() { this.getPoints(); }
  onSubmit(point) {
    if(!point) {return;}
    console.log('Submit Point', point);
    this._pointsService.updatePoint(point).subscribe(); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
