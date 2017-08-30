import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportModule } from './material-import.module'

import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MaterialImportModule,
      ]
    }).compileComponents();
  }));

  it('should create component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display toolbar text: "Angular Material2 Example App" ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[name="toolbar-title"]').textContent).toContain('Angular Material2 Example App');
  });

});
