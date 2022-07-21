import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancalComponent } from './cancal.component';

describe('CancalComponent', () => {
  let component: CancalComponent;
  let fixture: ComponentFixture<CancalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
