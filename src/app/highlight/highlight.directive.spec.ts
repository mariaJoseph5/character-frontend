import { HighlightDirective } from './highlight.directive';
import {TestBed} from '@angular/core/testing';
import {ElementRef, inject} from '@angular/core';
import {DetailsComponent} from '../details/details.component';
import {CurrencyPipe} from '@angular/common';
import {CapitalizePipe} from '../capitalize/capitalize.pipe';
import {ConfigService} from '../config/config.service';
import {provideHttpClient, withFetch} from '@angular/common/http';

describe('HighlightDirective', () => {
  let fixture;
  //const directive = new HighlightDirective();
  beforeEach(async () => {
    await TestBed.runInInjectionContext(async () => {
      await TestBed.configureTestingModule({
        imports: [HighlightDirective],
        providers: [ElementRef]
      }).createComponent(HighlightDirective);
      fixture = TestBed.createComponent(HighlightDirective);
      fixture.detectChanges();
    });
  });
  // it('should have skyblue <h2>', () => {
  //   const h2: HTMLElement = fixture.nativeElement.querySelector('div');
  //   const bgColor = h2.style.backgroundColor;
  //   expect(bgColor).toBe('white');
  // });
  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
  it('should highlight',()=>{
       const h2: HTMLElement = fixture.nativeElement.querySelector('div');
       fixture.highlight("orange");
       const bgColor = h2.style.backgroundColor;
       expect(bgColor).toBe('orange');
  });
  it('should unhighlight',()=>{
    const h2: HTMLElement = fixture.nativeElement.querySelector('div');
    fixture.highlight("white");
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('white');
  });
});
