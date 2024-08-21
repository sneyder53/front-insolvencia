import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorariosComponent } from './honorarios.component';

describe('HonorariosComponent', () => {
  let component: HonorariosComponent;
  let fixture: ComponentFixture<HonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
