import {Component} from 'angular2/core';
import {PointsForm} from './points_form.component';

@Component({
  selector: 'sd-points',
  moduleId: module.id,
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
  directives: [PointsForm]
})
export class PointsComponent {}
