import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  opcionMenu:any;

  constructor() { }

  ngOnInit(): void {
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

}
