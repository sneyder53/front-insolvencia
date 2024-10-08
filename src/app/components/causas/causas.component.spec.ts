import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausasComponent } from './causas.component';

describe('CausasComponent', () => {
  let component: CausasComponent;
  let fixture: ComponentFixture<CausasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
