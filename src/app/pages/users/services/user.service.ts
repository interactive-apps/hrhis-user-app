import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiLink = '../../../../api';

  constructor(private httpClient: HttpClient) {}

  // USer Service Functions

  fetchUserSections() {
    const url = './assets/config/userSections.json';
    return this.httpClient.get(url);
  }

  fetchUsers() {
    const url = this.apiLink + '/users';
    return this.httpClient.get(url);
  }

  fetchUserByUid(userUid: string) {
    const url = this.apiLink + '/users/' + userUid;
    return this.httpClient.get(url);
  }

  addUser(payload: any) {
    const url = this.apiLink + '/users';
    return this.httpClient.post(url, payload);
  }

  updateUserByUid(userUid: string, payload: any) {
    const url = this.apiLink + '/users/' + userUid;
    return this.httpClient.post(url, payload);
  }

  deleteUserByUid(userUid: string) {
    const url = this.apiLink + '/users/' + userUid;
    return this.httpClient.delete(url);
  }

}
