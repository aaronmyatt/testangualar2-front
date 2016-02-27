import {Component, OnInit} from 'angular2/core';
//import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {ProfileService} from '../../api/profile.service';
import {ProfileInterface} from './profile.interface';
@Component({
  selector: 'profile-form',
  templateUrl: 'profile/components/profile_form.component.html',
  providers: [
    HTTP_PROVIDERS,
    ProfileService,
  ]
})
export class ProfileForm implements OnInit {

  constructor(private _profileService: ProfileService) {}

  model = new ProfileInterface();
  errorMessage: string = '';

  submitted = false;

  ngOnInit() { this.getProfile(); }
  getProfile() {this._profileService.getProfile().subscribe(
    profile => this.model = profile,
    error => this.errorMessage = <any>error
  );}
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
