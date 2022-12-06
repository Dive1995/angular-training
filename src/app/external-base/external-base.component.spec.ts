import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBaseComponent } from './external-base.component';

describe('ExternalBaseComponent', () => {
  let component: ExternalBaseComponent;
  let fixture: ComponentFixture<ExternalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
