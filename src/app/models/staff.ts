import { Role } from './role';

export class Staff {
	
 id: number;
createAt: Date;
updatedAt: Date;
email: String;
password:String;
name:String;
surname:String;
roleId : Number;
nextOtpCodeAfterDate: Date;
otpCode:String;
otpCodeExpiresAt: Date;

role: Role;



}
