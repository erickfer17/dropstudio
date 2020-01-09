import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscritionareaComponent } from './subscritionarea.component';

describe('SubscritionareaComponent', () => {
  let component: SubscritionareaComponent;
  let fixture: ComponentFixture<SubscritionareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscritionareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscritionareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
