import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'https://flowservetlaxauditorias.azurewebsites.net';
  constructor(
    private httpClient: HttpClient
  ){}

  refreshToken(request: any): Observable<any>{
    const refreshTokenRequest: any={
      accessToken: request.accessToken,
      refreshToken: request.refreshToken,
    }
    return this.httpClient.post<any>(this.baseApiUrl + '/api/token/refresh/', refreshTokenRequest);
  }

  checkUser(request: any): Observable<any>{
    const body: any={
      formId: request.formId,
      officialId: request.gems,
    };
    return this.httpClient.post<any>(this.baseApiUrl+'/api/authentication/login-employee',body);
  }

}
