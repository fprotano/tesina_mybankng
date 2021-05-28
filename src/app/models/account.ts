export class Account {
	id: number;
	createdAt: Date;
	updateAt: Date;
	iban: string;
	balance: number;
	email: string;
	password: string;
	name: string;
	surname: string;
	nextOtpCodeAfterDate: Date;
	otpCode: string;
	otpCodeExpiresAt: Date;
	creditCardNo: string;
	creditCardCin: string;
	creditCardExpiresAt: string;


}
