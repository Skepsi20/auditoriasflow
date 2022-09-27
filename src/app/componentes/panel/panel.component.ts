import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  opcionMenu:any;
  public cookieUser : string = '';
  decodedToken: any;
  usuario: any;

  constructor(
        private cookieService : CookieService,
        private router: Router,
        private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.cookieUser = this.cookieService.get('accessToken');
    this.employeesService.getAdministrator()
    .subscribe(
      (success)=>{
        this.usuario = success
        console.log(this.usuario)
      },(error)=>{
        console.log(error)
      }
    )

    if(!this.cookieUser){
      this.router.navigate(['']);
    }
    if(localStorage.getItem('vista')){
      this.opcionMenu = localStorage.getItem('vista');
      if(this.opcionMenu == 'calendario'){
        this.opcionMenu = 'agenda'
      }
    }
  }

  getDecodedAccessToken(accessToken: string): any {
    try {
      return jwt_decode(accessToken);
    } catch(Error) {
      var invalid = "Invalid user";
    }
  }

  seleccionMenu(vista:string){
    localStorage.setItem('vista', vista);
    this.opcionMenu = vista;
  }

  logOut(){
    console.log("log out")
    this.cookieService.delete('accessToken');
    this.ngOnInit();
  }

}
