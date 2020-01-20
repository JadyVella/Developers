import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rjx'

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  
  private username = 'JadyVella';
  private client_id = '897e600d1d17299d7eb1';
  private client_secret = 'b75b7c42f20a7cc6655dd6a7028b5a982ff1b4b9';

  constructor() { }
}
