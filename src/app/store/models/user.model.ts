export interface User {
  id: string;
}

export interface UserInfo {
  id: string;
  firstName: string;
  middlename: string;
  surname: string;
  email: string;
  phone: string;
  jobtitle: string;
  username: string;
  password: string;
  userRoles: any;
  organisationunit: any;
}

export const InitUserInfo = {
  id: '',
  firstName: '', middlename: '',
  surname: '', email: '',
  phone: '', username: '',
  jobtitle: '', password: '',
  userRoles: '', organisationunit: ''
};
