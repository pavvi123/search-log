import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getFile(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('assets/new.txt', options).map((response: Response) => {
        return response.text();

    //   data => {
    // console.log('data', data.text())
    //  return data.text());
})
  }

}
