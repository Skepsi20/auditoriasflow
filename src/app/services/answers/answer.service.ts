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

  getAnswersById(resultId:string): Observable<any>{
    return this.httpClient.get<answer[]>(this.baseApiUrl + '/api/results/'+resultId);
  }

  addAnswer(answerRequest: any): Observable<any>{
    const body: answer={
      eventId: answerRequest.eventId,
      assignedTo: answerRequest.assignedTo,
      questions: answerRequest.questions
    };
    return this.httpClient.post<answer>(this.baseApiUrl+'/api/results/',body);
  }

  updateAnswer(answerRequest: any, questionId: string):Observable<any>{
    const body: any={
      resultId: answerRequest.resultId,
      description: answerRequest.description,
      selection: answerRequest.selection,
      comments: answerRequest.comments,
    };
    return this.httpClient.put<any>(this.baseApiUrl+'/api/questions/'+questionId,body);
  }

  updateImages(answerRequest: any, questionId: string):Observable<any>{
    const body: any={
      images: answerRequest.images
    };
    return this.httpClient.put<any>(this.baseApiUrl+'/api/questions/'+questionId+'/images',body);
  }
    //PUT api/events/{guid}/status

  updateStatusToComplete(status: string, eventId: string):Observable<any>{
    const body = {
      status: status
    }
    return this.httpClient.put<any>(this.baseApiUrl+'/api/events/'+eventId+'/status',body);
  }
}
