import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTextoComponent } from './heroe-texto.component';

describe('HeroeTextoComponent', () => {
  let component: HeroeTextoComponent;
  let fixture: ComponentFixture<HeroeTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
