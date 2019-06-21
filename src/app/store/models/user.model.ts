export interface User {
  id: string;
}

export interface UserInfo {
  id: string;
  firstname: string;
  middlename: string;
  surname: string;
  email: string;
  phone: string;
  jobtitle: string;
  username: string;
  password: string;
  role: any;
  organisationunit: any;
}

export const InitUserInfo = {
  id: '',
  firstname: '', middlename: '',
  surname: '', email: '',
  phone: '', username: '',
  jobtitle: '', password: '',
  role: '', organisationunit: ''
};
