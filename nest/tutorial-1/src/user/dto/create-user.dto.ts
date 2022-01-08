import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}


// {
//   "username": "xxx",
//   "email": "yyy"
// }
// {
//   "statusCode": 400,
//   "message": [
//       "email must be an email",
//       "password should not be empty"
//   ],
//   "error": "Bad Request"
// }

