import {Component} from 'angular2/core';
import {ProfileForm} from './profile_form.component';

@Component({
  selector: 'sd-profile',
  moduleId: module.id,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  directives: [ProfileForm]
})
export class ProfileComponent {}
