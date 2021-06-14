import { Payment } from './payment';

export class Account {
	id: number;
	createdAt: Date;
	updateAt: Date;
	iban: String;
	balance: number;
	email: String;
	password: String;
	name: String;
	surname: String;
	nextOtpCodeAfterDate: Date;
	otpCode: String;
	otpCodeExpiresAt: Date;
	creditCardNo: String;
	creditCardCin: String;
	creditCardExpiresAt: String;


	payment: Payment;
}
