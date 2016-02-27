import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';

import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';
import {PointsComponent} from '../../points/components/points.component';
import {MapsComponent} from '../../maps/components/maps.component';
import {ProfileComponent} from '../../profile/components/profile.component';

import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/points', name: 'Points', component: PointsComponent },
  { path: '/maps', name: 'Maps', component: MapsComponent },
  { path: '/profile', name: 'Profile', component: ProfileComponent }
])
export class AppComponent {}
