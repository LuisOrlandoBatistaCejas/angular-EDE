import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( @Inject('API_URL') private apiUrl: string,
               protected http: HttpClient) { }
  /**
   * Shorthand method to make a GET request to the API using the given url.
   * Usually used to read data from the API
   *
   * @param url The url to request.
   * @param options The options of the request.
   */
  get(url: string, options?): Observable<any> {
    return this.http.get(this.apiUrl + url, options);
  }

  getWithoutAuthHeader(url: string, options?): Observable<any> {
    return this.http.get(this.apiUrl + url, options);
  }

  /**
   * Shorthand method to make a POST request to the API using the given url.
   * Usually used to send new data to the API.
   *
   * @param url The url to request.
   * @param body The request's body.
   * @param options The options of the request.
   */
  post(url: string, body: any, options?): Observable<any> {
    return this.http.post(this.apiUrl + url, body, options);
  }

  /**
   * Shorthand method to make a PUT request to the API using the given url.
   * Usually used to change data in the API.
   *
   * @param url The url to request.
   * @param body The request's body.
   * @param options The options of the request.
   */
  put(url: string, body: any, options?): Observable<any> {
    return this.http.put(this.apiUrl + url, body, options);
  }

  /**
   * Shorthand method to make a DELETE request to the Api using the given url.
   * Used to delete data from the API.
   *
   * @param url The url to request.
   * @param options The options of the request.
   */
  delete(url: string, options?): Observable<any> {
    return this.http.delete(this.apiUrl + url, options);
  }
}
