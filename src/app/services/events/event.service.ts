import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { event } from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseApiUrl = 'https://flowservetlaxauditorias.azurewebsites.net';
  constructor(
    private httpClient: HttpClient
  ){}

  getEvents(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseApiUrl + '/api/events/');
  }

  addEvents(eventRequest: event): Observable<event>{
    const body: event={
      name: eventRequest.name,
      description: eventRequest.description,
      startDateTime: eventRequest.startDateTime,
      endDateTime: eventRequest.endDateTime,
      assignedTo: eventRequest.assignedTo,
      status: eventRequest.status,
      formId: eventRequest.formId,
    };
    return this.httpClient.post<event>(this.baseApiUrl+'/api/events/',body);
  }

}
