import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import {DetailsComponent} from '../details/details.component';
import {CurrencyPipe} from '@angular/common';
import {CapitalizePipe} from '../capitalize/capitalize.pipe';
import {HighlightDirective} from '../highlight/highlight.directive';
import {HttpClient, HttpHandler, provideHttpClient, withFetch} from '@angular/common/http';

describe('ConfigService', () => {
  let configService: ConfigService;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient(withFetch())]});
    configService = TestBed.inject(ConfigService);
  });

  it('#getValue should return real value from the real service', () => {
    configService.getDetails().subscribe((value)=>{
      expect(value).toBe(Object)
    });
  });


  it('should be created', () => {
    expect(configService).toBeTruthy();
  });
});
