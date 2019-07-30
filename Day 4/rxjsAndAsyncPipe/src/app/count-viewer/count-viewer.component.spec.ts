import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountViewerComponent } from './count-viewer.component';

describe('CountViewerComponent', () => {
  let component: CountViewerComponent;
  let fixture: ComponentFixture<CountViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
