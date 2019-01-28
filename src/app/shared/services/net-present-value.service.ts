import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NetPresentValue, NetPresentValueResult } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetPresentValueService {

  constructor(private http: HttpClient) { }

  calculateAndSaveNPV(npv: NetPresentValue): Observable<Array<NetPresentValueResult>> {
    return this.http.post<Array<NetPresentValueResult>>(`${environment.netPresentValueApi}/save`, npv);
  }

  calculateNPV(npv: NetPresentValue): Observable<Array<NetPresentValueResult>> {
    return this.http.post<Array<NetPresentValueResult>>(`${environment.netPresentValueApi}`, npv);
  }

  getAll(): Observable<Array<NetPresentValue>> {
    return this.http.get<Array<NetPresentValue>>(`${environment.netPresentValueApi}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.netPresentValueApi}/{id}/delete`);
  }
}
