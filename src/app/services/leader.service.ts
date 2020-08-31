import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {of, Observable, pipe} from 'rxjs';
import {delay,map,catchError} from 'rxjs/operators';
import {HttpClient, HttpXsrfTokenExtractor, HttpHeaders} from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';



@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor(private http:HttpClient, private ProcessHTTPMsgService: ProcessHTTPMsgService ) { }

  getLeaders(): Observable<Leader[]>
  {
    return this.http.get<Leader[]>(baseURL + 'leadership/')
    .pipe(catchError(this.ProcessHTTPMsgService.handleError))
    
  }

  getFeaturedLeader(): Observable <Leader>{
    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
    .pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.ProcessHTTPMsgService.handleError))
  }
}
