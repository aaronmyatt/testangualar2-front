import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {ProfileInterface} from '../profile/components/profile.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProfileService {
  constructor (private http: Http) {}

  private _id:number = 1;
  private _Url = 'http://localhost:3000/profile/'+this._id;  // URL to web api

  getProfile () {
    return this.http.get(this._Url)
      .map(res => <ProfileInterface> res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
