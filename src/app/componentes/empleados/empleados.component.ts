import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, AfterViewInit {
  @ViewChild('employeeForm') employeeForm?: NgForm;
  @ViewChild('adminForm') adminForm?: NgForm;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  formReady = false;
  displayedColumns = ['nombre','matricula','opciones'];
  employees: Array<employee> = [];
  employeeArray: Array<any> = [];
  dataSource!: MatTableDataSource<any>;

  menuOption = 'uno';
  hide = true;  
  userToUpdate = '';
  userToDelete = '';

  admin:any = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber:''
  }

  empleado: employee = {
    firstName: '',
    lastName: '',
    officialId: ''
  }

  updateEmpleado: employee = {
    firstName: '',
    lastName: '',
    officialId: ''
  }

  constructor(
    private snackbar: MatSnackBar,
    private employeService: EmployeesService
  ) {
    this.employeService.getEmployees()
    .subscribe(
      (successResponse)=>{
        this.employees = successResponse;
        for (let i = 0; i < this.employees.length; i++) {
          this.employeeArray.push(createNewUser(successResponse[i]));
        }
        this.dataSource = new MatTableDataSource(this.employeeArray);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.empleado = {
      firstName: '',
      lastName: '',
      officialId: ''
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkForm(){
    if(this.empleado.firstName != '' && this.empleado.lastName != '' && this.empleado.officialId != ''){
      this.formReady = true;
    }else{
      this.formReady = false;
    }
  }

  checkAdminForm(){
    if(this.admin.firstName != '' && this.admin.lastName != '' && this.admin.email != '' && this.admin.password != '' && this.admin.phoneNumber != ''){
      this.formReady = true;
    }else{
      this.formReady = false;
    }
  }

  add(){
    if(this.empleado.firstName != '' && this.empleado.lastName != '' && this.empleado.officialId != ''){
      this.formReady = true;
    }else{
      this.formReady = false;
    }
    if(this.formReady){
      this.employeService.addEmployees(this.empleado)
      .subscribe(
        (success)=>{
          this.snackbar.open('Se creó el empleado correctamente',undefined,{
            duration: 2000
          });
          window.location.reload();
        },
        (error)=>{
          this.snackbar.open('Error creando al empleado',undefined,{
            duration: 2000
          });
          console.log(error)
        }
      )
    }
  }

  addAdmin(){
  if(this.admin.firstName != '' && this.admin.lastName != '' && this.admin.email != '' && this.admin.password != '' && this.admin.phoneNumber != ''){
      this.formReady = true;
    }else{
      this.formReady = false;
    }
    if(this.formReady){
      this.employeService.addAdmin(this.admin)
      .subscribe(
        (success)=>{
          this.snackbar.open('Se creó el administrador correctamente',undefined,{
            duration: 2000
          });
          var tiempos = setTimeout(()=>{
            window.location.reload();
          },2000);
        },
        (error)=>{
          this.snackbar.open('Error creando al administrador',undefined,{
            duration: 2000
          });
          console.log(error)
        }
      )
    }
  }

  employeeToUpdate(id:any){
    this.userToUpdate = id;
    this.employeService.getEmployee(id)
    .subscribe(
      (success)=>{
        console.log(success)
        this.updateEmpleado.firstName = success.firstName,
        this.updateEmpleado.lastName = success.lastName,
        this.updateEmpleado.officialId = success.officialId        
      },(error)=>{
        console.log(error)
      }
    )
  }

  updateEmployee(){
    this.employeService.updateEmployee(this.userToUpdate, this.updateEmpleado)
    .subscribe(
      (success)=>{
        this.snackbar.open('Se actualizó el usuario correctamente',undefined,{
          duration: 2000
        });
          var tiempos = setTimeout(()=>{
            window.location.reload();
          },2000);      
        },(error)=>{
        this.snackbar.open('Error actualizando al usuario',undefined,{
          duration: 2000
        });
        console.log(error)
      }
    )
  }

  employeeToDelete(id:any){
    this.userToDelete = id;
  }

  deleteEmployee(){
    this.employeService.deleteEmployee(this.userToDelete)
    .subscribe(
      (success)=>{
        this.snackbar.open('Se eliminó el usuario correctamente',undefined,{
          duration: 2000
        });
          var tiempos = setTimeout(()=>{
            window.location.reload();
          },2000);      
        },(error)=>{
        this.snackbar.open('Error eliminando al usuario',undefined,{
          duration: 2000
        });
        console.log(error)
      }
    )
  }

}

function createNewUser(todas: any): any {

  return {
    id: todas.id,
    firstName: todas.firstName,
    lastName : todas.lastName,
    officialId: todas.officialId
  };
}

