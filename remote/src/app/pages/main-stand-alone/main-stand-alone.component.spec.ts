import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStandAloneComponent } from './main-stand-alone.component';

describe('MainStandAloneComponent', () => {
  let component: MainStandAloneComponent;
  let fixture: ComponentFixture<MainStandAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStandAloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
