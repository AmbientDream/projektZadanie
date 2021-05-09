import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PewienKompComponent } from './pewien-komp.component';

describe('PewienKompComponent', () => {
  let component: PewienKompComponent;
  let fixture: ComponentFixture<PewienKompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PewienKompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PewienKompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
