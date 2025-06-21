import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsComponent } from '../details/details.component';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public http = inject(HttpClient);

  getDetails(): Observable<any> {
    return this.http.get('../../assets/person-details.json');
  }
}
