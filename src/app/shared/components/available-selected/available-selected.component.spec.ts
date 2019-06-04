import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSelectedComponent } from './available-selected.component';

describe('AvailableSelectedComponent', () => {
  let component: AvailableSelectedComponent;
  let fixture: ComponentFixture<AvailableSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
