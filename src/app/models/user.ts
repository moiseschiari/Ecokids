export interface Roles {
  admin?: boolean;
  editor?: boolean;

}

export interface UserInterface {
  id?: string;
  name?: string;
  lname?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  roles: Roles;
}