import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjAppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjAppComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProjAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome angular-monorepo-microfront'
    );
  });

  it(`should have as title 'angular-monorepo-microfront'`, () => {
    const fixture = TestBed.createComponent(ProjAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-monorepo-microfront');
  });
});
