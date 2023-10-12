import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryParamService {
  private queryParamsSource = new BehaviorSubject<any>({});
  queryParams$ = this.queryParamsSource.asObservable();

  setQueryParams(queryParams: any) {
    this.queryParamsSource.next(queryParams);
  }
}
