import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import {LEADERS} from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Leader[]
  {
    return LEADERS;
  }
  constructor() { }

  getFeaturedLeader(): Leader{
    return LEADERS.filter((lead) => lead.featured)[0];
  }
}