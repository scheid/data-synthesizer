import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSynthesizerComponent } from './data-synthesizer.component';

describe('DataSynthesizerComponent', () => {
  let component: DataSynthesizerComponent;
  let fixture: ComponentFixture<DataSynthesizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSynthesizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSynthesizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
