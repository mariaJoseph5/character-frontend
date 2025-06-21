import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CapitalizePipe } from '../capitalize/capitalize.pipe';
import { ConfigService } from '../config/config.service';
import { HighlightDirective } from '../highlight/highlight.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, CapitalizePipe, HighlightDirective],
  providers: [ConfigService],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  items$: Observable<any>;
  itemsList: any[] = [];
  httpObj = inject(ConfigService);
  JSON: any;
  constructor() {
    this.items$ = this.httpObj.getDetails();
  }
  ngOnInit() {
    this.items$.subscribe((json) => {
      this.itemsList = json['persons'];
    });
  }
}

