import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskFormComponent } from './task-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import {
  ActivatedRoute,
  RouterModule,
  convertToParamMap,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  class MockActivatedRoute {
    // Simular diferentes parámetros de ruta según sea necesario
    private subject = new BehaviorSubject(convertToParamMap({ id: '1' }));
    readonly paramMap = this.subject.asObservable();

    // Puedes agregar más propiedades y métodos según sea necesario para tus pruebas
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],

      providers: [
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ }),
             
            },
          },
        },
      ],
    }).compileComponents();
    
   
 

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('componente creado', () => {
    expect(component).toBeTruthy();
  });

  // it('mostrar titulo', ()=>{
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Titulo de Prueba')
  // })

});
