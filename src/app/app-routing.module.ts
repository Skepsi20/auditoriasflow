import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { FormularioActualComponent } from './componentes/forms/formulario-actual/formulario-actual.component';
import { StampingComponent } from './componentes/forms/stamping/stamping.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RolesGuard } from './componentes/auth/roles.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'formulario', component: FormularioActualComponent},
  {path:'empleados', component: EmpleadosComponent, canActivate:[RolesGuard], data:{expectedRole: ['Administrador']}},
  {path:'forms', component: StampingComponent},
  {path:'panel', component: PanelComponent, canActivate:[RolesGuard], data:{expectedRole: ['Administrador']}},
  {path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
