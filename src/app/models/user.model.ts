export interface UserModel {
  readonly id: number;
  readonly email: string;
  readonly name: PersonalDetails;
}

export interface PersonalDetails{
  readonly firstname: string;
  readonly lastname: string;
}
