import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  opcionMenu:any;
  public cookieUser : string = '';

  constructor(
        private cookieService : CookieService,
        private router: Router,
  ) { }

  ngOnInit(): void {
    this.cookieUser = this.cookieService.get('accessToken');
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
