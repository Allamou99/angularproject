import { Injectable } from '@angular/core';
import {HttpClient, HttpXsrfTokenExtractor, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Feedback} from '../shared/feedback';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,) { }


  submitFeedback(feedback:Feedback): Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',

      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions )
  }
}
