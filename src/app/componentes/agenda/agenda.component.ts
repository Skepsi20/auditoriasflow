import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { event } from 'src/app/models/event.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventService } from 'src/app/services/events/event.service';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { employee } from 'src/app/models/employee.model';
import { FormsService } from 'src/app/services/form/forms.service';
import { CalendarOptions, render } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  @ViewChild('eventForm') eventForm?: NgForm;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<any>;
  events: Array<event> = [];
  eventsArray: Array<any> = [];
  displayedColumns = ['nombre','descripcion','fecha','encargado','formulario','status'];
  evento: event = {
    name: "",
    description: "",
    startDateTime: '',
    endDateTime: '',
    assignedTo: '',
    status: '',
    formId: '',
  }
  formReady = false;
  dates: any = '';
  employees: Array<employee> = [];
  forms: Array<any> = [];

  public eventsCalendar: any = [];

  title:any;
  description:any;
  status:any;
  form:any;
  employee:any;
  mostrar = false;
  menuOption = 'uno';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.eventsCalendar,
    eventClick: this.handleDateClick.bind(this),
    locale: esLocale
  };

  /* QR INICIO */
    public elementType = NgxQrcodeElementTypes.URL;
    public errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    public value = ''
  /* QR FIN */

  constructor(
    private eventService: EventService,
    private employeesService: EmployeesService,
    private auditoriasService: FormsService,
    private snackbar: MatSnackBar,
  ) {
    this.eventService.getEvents()
    .subscribe(
      (successResponse)=>{
        this.events = successResponse;
        for (let i = 0; i < this.events.length; i++) {
          this.eventsArray.push(createNewUser(successResponse[i]));
        }
      },
      (error) =>{
        console.log(error);
      }
    );
    this.dataSource = new MatTableDataSource(this.eventsArray);
  }

  ngOnInit(): void {
  var date = new Date();
    this.eventService.getEvents()
    .subscribe(
      (success)=>{
        console.log(success)
        for (let i = 0; i < success.length; i++) {
          var statusColor = '';
          if(success[i].status == 'Pendiente'){
            statusColor = '#ffa806'
          }else if(success[i].status == 'Completado'){
            statusColor = '#a8e147'
          }else if(success[i].status == 'Retrasado'){
            statusColor = '#01051d'
          }
          var inicio = new Date(success[i].startDateTime);
          var fin = new Date(success[i].endDateTime);

          this.eventsCalendar[i] = {
            title: success[i].name,
            start: inicio.toISOString().split('T')[0],
            end: fin.toISOString().split('T')[0],
            description: success[i].description,
            status: success[i].status,
            form: success[i].form.code + ' - ' + success[i].form.name,
            formId: success[i].form.id,
            employee: success[i].employee.firstName +' '+success[i].employee.lastName,
            color: statusColor
          }
        }
      },(error)=>{
        console.log(error)
      }
    )
    this.employeesService.getEmployees()
    .subscribe(
      (success)=>{
        this.employees = success;
      },(error)=>{
        console.log(error);
      }
    )
    this.auditoriasService.getForm()
    .subscribe(
      (success)=>{
        this.forms = success
      },(error)=>{
        console.log(error);
      }
    )
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
    if(
      this.evento.name != ""
    && this.evento.description != ""
    && this.evento.startDateTime != ''
    && this.evento.endDateTime != ''
    && this.evento.assignedTo != ''
    && this.evento.formId != ''
    ){
      this.formReady = true;
    }else{
      this.formReady = false;
    }
  }

  showDates(rangePicker: any){
    this.evento.startDateTime = rangePicker._model.selection.start
    this.evento.endDateTime = rangePicker._model.selection.end
    this.checkForm();
  }

  add(){
    if(this.formReady){
      const eventRequest = {
        name: this.evento.name,
        description: this.evento.description,
        startDateTime: this.evento.startDateTime,
        endDateTime: this.evento.endDateTime,
        assignedTo: this.evento.assignedTo,
        status: 'Pendiente',
        formId: this.evento.formId,
      }
      this.eventService.addEvents(eventRequest)
      .subscribe(
        (successResponse)=>{
          this.snackbar.open('Se creó el evento correctamente',undefined,{
            duration: 2000
          });
          window.location.reload();
        },
        (error) =>{
          this.snackbar.open('Error creando el evento, intente nuevamente.',undefined,{
            duration: 2000
          });
        }
      );
    }
  }

  handleDateClick(arg:any){
    this.value = 'http://localhost:4200/forms?formId='+arg.event.extendedProps.formId;

    this.title = arg.event._def.title;
    this.description = arg.event.extendedProps.description;
    this.status = arg.event.extendedProps.status;
    this.form = arg.event.extendedProps.form;
    this.employee = arg.event.extendedProps.employee;
  }


}

function createNewUser(todas: any): any {
  let dateTime = todas.startDateTime +' / '+todas.endDateTime;

  return {
    id: todas.id,
    name: todas.name,
    description: todas.description,
    date: dateTime,
    employee: todas.employee.firstName +' '+ todas.employee.lastName,
    form: todas.form.code
  };
}


