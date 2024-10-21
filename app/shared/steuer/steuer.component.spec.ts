import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteuerComponent } from './steuer.component';

describe('SteuerComponent', () => {
  let component: SteuerComponent;
  let fixture: ComponentFixture<SteuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
