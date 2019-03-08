import { Injectable } from '@angular/core';
import {isNullOrUndefined} from 'util';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string;

  constructor(protected http: HttpService) {
  }

  /**
   * Gets a list of paginated items
   */
  list(params?: any, responseType?: any): Observable<any> {
    if (!params) {
      return this.http.get(this.url);
    }
    params = this.serialize(params);
    return this.http.get(this.url, { params: this.object2Params(params), responseType: responseType });
  }


  /**
   * Creates a new item
   */
  create(resource?: any): Observable<any> {
    resource = this.serialize(resource);
    return this.http.post(this.url, resource);
  }

  /**
   * Updates the item with given id
   */
  update(resource: any): Observable<any> {
    const id = resource.id;
    resource.id = null;
    resource = this.serialize(resource);
    return this.http.put(`${this.url}/${id}`, resource);
  }

  /**
   * Deletes the item with given id
   */
  delete(id: string | number, resource?: any): Observable<any> {
    if (!resource) {
      return this.http.delete(`${this.url}/${id}`);
    } else {
      return this.http.delete(`${this.url}/${id}`, { body: (resource) });
    }
  }
  /**
   * Gets the data ready for being sent to the API.
   * Converts boolean params into binary params attributes.
   * Formats dates params.
   *
   * @param data The data to serialize
   */
  protected serialize(data: any) {
    const serializedData = {};
    Object.getOwnPropertyNames(data).forEach((attr) => {
      if (isNullOrUndefined(data[attr])) {
        // Does not include it if null or undefined
      } else if (typeof data[attr] === 'boolean') {
        // Converts boolean params into binary int.
        serializedData[attr] = data[attr] ? 1 : 0;
      }  else if (typeof data[attr] === 'number' && data[attr] === -1) {
      } else if (data[attr] instanceof Object) {
        serializedData[attr] = this.serialize(data[attr]);
      } else {
        // Leaves it as is.
        serializedData[attr] = data[attr];
      }
    });
    return serializedData;
  }

  /**
   * Takes an object with params and transforms it into
   * a query params string to pass to an http request.
   *
   * @param object The object with the params.
   */
  protected object2Params(object: any): any {
    const params = new HttpParams({fromObject: object});
    console.log(params);
    return params;
  }
}
