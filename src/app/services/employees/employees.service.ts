import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseApiUrl = 'https://flowservetlaxauditorias.azurewebsites.net';
  constructor(
    private httpClient: HttpClient
  ){}

  getEmployees(): Observable<employee[]>{
    return this.httpClient.get<employee[]>(this.baseApiUrl + '/api/employees/');
  }

  getEmployee(id:string): Observable<employee>{
    return this.httpClient.get<employee>(this.baseApiUrl + '/api/employees/'+id);
  }

  getAdministrator():Observable<employee>{
    return this.httpClient.get<employee>(this.baseApiUrl + '/api/administrators/logged');
  }

  addEmployees(employeeRequest: employee): Observable<employee>{
    const body: employee={
      firstName: employeeRequest.firstName,
      lastName: employeeRequest.lastName,
      officialId: employeeRequest.officialId
    };
    return this.httpClient.post<employee>(this.baseApiUrl+'/api/authentication/register-employee',body);
  }

  addAdmin(adminRequest: any): Observable<any>{
    const body: any={
      firstName: adminRequest.firstName,
      lastName: adminRequest.lastName,
      email: adminRequest.email,
      password: adminRequest.password,
      avatarUrl: '',
      phoneNumber: adminRequest.phoneNumber
    };
    return this.httpClient.post<any>(this.baseApiUrl+'/api/authentication/register-administrator',body);
  }

  updateEmployee(id:string, employeeRequest: employee): Observable<employee>{
    const body: employee={
      firstName: employeeRequest.firstName,
      lastName: employeeRequest.lastName,
      officialId: employeeRequest.officialId
    };
    return this.httpClient.put<employee>(this.baseApiUrl+'/api/employees/'+id,body);
  }

  deleteEmployee(id:string){
    return this.httpClient.delete<employee>(this.baseApiUrl + '/api/employees/'+id);
  }


}
