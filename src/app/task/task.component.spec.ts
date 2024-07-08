import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskComponent } from './task.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;


  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponentModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        IonicModule,
        FormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('componente creado', () => {
    expect(component).toBeTruthy();
  });
});
