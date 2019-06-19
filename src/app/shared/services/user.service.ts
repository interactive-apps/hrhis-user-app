import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  // USer Service Functions

  fetchUserSections() {
    const url = './assets/config/userSections.json';
    return this.httpClient.get(url);
  }

  fetchUsers() {
    const url = '../../users/';
    return this.httpClient.get(url);
  }

  fetchUserByUid(userUid: string) {
    const url = '../../users/' + userUid;
    return this.httpClient.get(url);
  }

  updateUserByUid(userUid: string, payload: any) {
    const url = '../../users/' + userUid;
    return this.httpClient.post(url, payload);
  }

  deleteUserByUid(userUid: string) {
    const url = '../../users/' + userUid;
    return this.httpClient.delete(url);
  }

  // USer Group Service Functions

  fetchUserGroups() {
    const url = '../../usersgroups/';
    return this.httpClient.get(url);
  }

  fetchUserGroupByUid(userGroupUid: string) {
    const url = '../../userGroup/' + userGroupUid;
    return this.httpClient.get(url);
  }

  updateUserGroupByUid(userGroupUid: string, payload: any) {
    const url = '../../userGroup/' + userGroupUid;
    return this.httpClient.post(url, payload);
  }

  deleteUserGroupByUid(userGroupUid: string) {
    const url = '../../userGroup/' + userGroupUid;
    return this.httpClient.delete(url);
  }

  // USer Role Service Functions

  fetchUserRoles() {
    const url = '../../userRole/';
    return this.httpClient.get(url);
  }

  fetchUserRoleByUid(userRoleUid: string) {
    const url = '../../userRole/' + userRoleUid;
    return this.httpClient.get(url);
  }

  updateUserRoleByUid(userRoleUid: string, payload: any) {
    const url = '../../userRole/' + userRoleUid;
    return this.httpClient.post(url, payload);
  }

  deleteUserRoleByUid(userRoleUid: string) {
    const url = '../../userRole/' + userRoleUid;
    return this.httpClient.delete(url);
  }

}
