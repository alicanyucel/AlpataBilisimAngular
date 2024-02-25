import { UserModel } from "./user";

export class LoginResponseModel{
    token: string = "";
    user: UserModel = new UserModel();
}