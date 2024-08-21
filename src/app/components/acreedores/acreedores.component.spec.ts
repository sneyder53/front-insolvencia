import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreedoresComponent } from './acreedores.component';

describe('AcreedoresComponent', () => {
  let component: AcreedoresComponent;
  let fixture: ComponentFixture<AcreedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcreedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcreedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
