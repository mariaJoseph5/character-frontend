import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import {ConfigService} from '../config/config.service';
import {CurrencyPipe} from '@angular/common';
import {CapitalizePipe} from '../capitalize/capitalize.pipe';
import {HighlightDirective} from '../highlight/highlight.directive';
import {provideHttpClient, withFetch} from '@angular/common/http';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent, CurrencyPipe, CapitalizePipe, HighlightDirective],
      providers:[ConfigService, provideHttpClient(withFetch())]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
