import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { event } from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  private baseApiUrl = 'https://flowservetlaxauditorias.azurewebsites.net';
  constructor(
    private httpClient: HttpClient
  ){}



  getAllIncidents(): Observable<any>{
    return this.httpClient.get<any>(this.baseApiUrl + '/api/incidences/summary');
  }

  getIncidents(module: string, area:string): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseApiUrl + '/api/incidences?module='+module+'&area='+area);
  }

/* 
  getEvent(id:string): Observable<any>{
    return this.httpClient.get<any>(this.baseApiUrl + '/api/events/'+id);
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

  updateEvent(id:string, eventRequest: event): Observable<event>{
    const body: event={
      name: eventRequest.name,
      description: eventRequest.description,
      startDateTime: eventRequest.startDateTime,
      endDateTime: eventRequest.endDateTime,
      assignedTo: eventRequest.assignedTo,
      status: eventRequest.status,
      formId: eventRequest.formId,
    };
    return this.httpClient.put<event>(this.baseApiUrl+'/api/events/'+id,body);
  }

  deleteEvent(id:string): Observable<any>{
    return this.httpClient.delete<any>(this.baseApiUrl + '/api/events/'+id);
  } */

}