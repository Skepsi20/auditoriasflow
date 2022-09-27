import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user:any = {
    name: '',
    lastName: '',
    password: '',
    currentPassword:'',
    confirmedPassword:'',
    profileImageUrl: '',
  }
  hide = true;


  constructor(
    private userService: AuthService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    //Datos del usuario
    this.userService.getUserData()
    .subscribe(
      (success)=>{
        console.log("DATOS DEL ESTUDIANTE",success)
        this.user.name = success.firstName;
        this.user.lastName = success.lastName;
        /*this.user.profileImageUrl = success.profileImageUrl;
      if(!this.user.profileImageUrl){
          this.user.profileImageUrl = ''
        }*/
      },(error)=>{
        console.log(error);
      }
    )
  }

  updateStudentName(){
    const request = {
      firstName: this.user.name,
      lastName: this.user.lastName
    }
    this.userService.updateName(request)
    .subscribe(
      (success)=>{
        this.snackbar.open('Nombre actualizado',undefined,{
          duration: 2000
        });
        this.ngOnInit();
      },(error)=>{
        this.snackbar.open('Error actualizando el nombre',undefined,{
          duration: 2000
        });
        console.log(error);
      }
    )
  }

  updateStudentPassword(){
    const request = {
      password: this.user.password,
      confirmedPassword: this.user.confirmedPassword,
      currentPassword: this.user.currentPassword
    }
    this.userService.updatePassword(request)
    .subscribe(
      (success)=>{
        this.snackbar.open('Contraseña actualizada',undefined,{
          duration: 2000
        });
        this.ngOnInit();
      },(error)=>{
        this.snackbar.open('Error actualizando la contraseña',undefined,{
          duration: 2000
        });
        console.log(error);
      }
    )
  }

}
