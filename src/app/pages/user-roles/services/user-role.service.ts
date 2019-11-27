import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  apiLink = '../../../../api';

  constructor(private httpClient: HttpClient) {}

  fetchUserRoles() {
    const url = this.apiLink + '/userRoles';
    return this.httpClient.get(url);
  }

  fetchAuthorities() {
    const url = this.apiLink + '/userAuthorities';
    return this.httpClient.get(url);
  }

  fetchUserRoleByUid(userRoleUid: string) {
    const url = this.apiLink + '/userRoles/' + userRoleUid;
    return this.httpClient.get(url);
  }

  updateUserRoleByUid(userRoleUid: string, payload: any) {
    const url = this.apiLink + '/userRoles/' + userRoleUid;
    return this.httpClient.post(url, payload);
  }

  deleteUserRoleByUid(userRoleUid: string) {
    const url = this.apiLink + '/userRoles/' + userRoleUid;
    return this.httpClient.delete(url);
  }

}
