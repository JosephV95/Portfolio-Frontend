import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { interceptorProvider } from './servicio/interceptor-service';

///NO ESTOY DEGURO SI SE IMPORTA EL EXPERIENCIA SERVICE
import { ExperienciaService } from './servicio/experiencia-service';
import { EducacionService } from './servicio/educacion-service';
import { ProyectoService } from './servicio/proyecto.service'

import { ExpAddComponent } from './componentes/experiencia/ITEMS/exp-add/exp-add.component';
import { ExpEditComponent } from './componentes/experiencia/ITEMS/exp-edit/exp-edit.component';
import { EducAddComponent } from './componentes/educacion/ITEMS/educ-add/educ-add.component';
import { EducEditComponent } from './componentes/educacion/ITEMS/educ-edit/educ-edit.component';
import { ProAddComponent } from './componentes/proyectos/ITEMS/pro-add/pro-add.component';
import { ProEditComponent } from './componentes/proyectos/ITEMS/pro-edit/pro-edit.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    HomeComponent,
  
    ExpAddComponent,
    ExpEditComponent,
    EducAddComponent,
    EducEditComponent,
    ProAddComponent,
    ProEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  //Lo agregue para formularios reactivos
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
        
  ],

  providers: [
    interceptorProvider,
    ///NO ESTOY DEGURO SI SE IMPORTA EL EXPERIENCIA SERVICE
    ExperienciaService,
    EducacionService,
    ProyectoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
