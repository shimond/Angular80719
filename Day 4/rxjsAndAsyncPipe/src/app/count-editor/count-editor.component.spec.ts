import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEditorComponent } from './count-editor.component';

describe('CountEditorComponent', () => {
  let component: CountEditorComponent;
  let fixture: ComponentFixture<CountEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
