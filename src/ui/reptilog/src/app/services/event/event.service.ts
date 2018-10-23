import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventService {

  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  addEvent(eventInfo: any): Observable<any> {
    const endpoint = 'api/create-event';
    return this.http.post(endpoint, eventInfo, this.httpOptions);
  }

  getEvents(petId: number, eventType: string): Observable<any> {
    const endpoint = 'api/get-events/' + petId + '/' + eventType;
    return this.http.get(endpoint, this.httpOptions);
  }

}