import { Account } from './account';

export class Payment {

	id: Number;
    amount: Number;
	email: string;
	customCode: string;
	transactionId: string;
	urlUndo: string;
	urlSuccess: string;
	urlNotify: string;

	account: Account;
}
