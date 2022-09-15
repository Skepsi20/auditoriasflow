import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { FormularioActualComponent } from './componentes/forms/formulario-actual/formulario-actual.component';
import { StampingComponent } from './componentes/forms/stamping/stamping.component';
import { PanelComponent } from './componentes/panel/panel.component';

const routes: Routes = [
  {path:'', component: PanelComponent},
  {path:'formulario', component: FormularioActualComponent},
  {path:'empleados', component: EmpleadosComponent},
  {path:'forms', component: StampingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
