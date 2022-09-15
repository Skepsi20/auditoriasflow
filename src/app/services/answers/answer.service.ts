import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { answer } from '../../models/answer.model';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseApiUrl = 'https://flowservetlaxauditorias.azurewebsites.net';
  constructor(
    private httpClient: HttpClient
  ){}

  getanswers(): Observable<answer[]>{
    return this.httpClient.get<answer[]>(this.baseApiUrl + '/api/results/');
  }

  addAnswer(answerRequest: answer): Observable<answer>{
    const body: answer={
      eventId: answerRequest.eventId,
      assignedTo: answerRequest.assignedTo,
      image: answerRequest.image,
      questions: answerRequest.questions
    };
    return this.httpClient.post<answer>(this.baseApiUrl+'/api/results/',body);
  }

}
