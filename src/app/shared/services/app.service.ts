import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiLink = '../../../../api';

  constructor(private httpClient: HttpClient) {}

  // USer Service Functions

  fetchUserSections() {
    const url = './assets/config/userSections.json';
    return this.httpClient.get(url);
  }

}
