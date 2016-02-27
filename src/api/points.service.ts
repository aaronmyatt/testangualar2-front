import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {PointsInterface} from '../points/components/points.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';

@Injectable()
export class PointsService {
  constructor (private http: Http) {}

  //private _id:number = 1;
  private _Url = 'http://localhost:3000/points/';  // URL to web api

  getPoints () {
    return this.http.get(this._Url)
      .map(res => <PointsInterface[]> res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  updatePoint (point: PointsInterface) : Observable<PointsInterface>  {
    let body = JSON.stringify(point);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._Url, body, options)
      .map(res =>  <PointsInterface> res.json())
      .do(data => console.log('updatePoint posted...', data))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
