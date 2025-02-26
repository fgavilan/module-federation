export interface User {
  id: number;
  email: string;
  name: string;
  type: string;
}

export interface MenuItem {
  link: string;
  name: string;
  auth?: AuthStatus;
  children?: MenuItem[];
}

export enum AuthStatus  {
  LOGGED = 'logged',
  NOTLOGGED = 'notlogged'
}
