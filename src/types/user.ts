export interface NewUserDTO {
  newUserData: {
    username: string;
    password: string;
  };
}

export interface GetUserByIdDTO {
  id: string;
}
