import { Payment } from './payment';

export class ExternalPayment {

	customerName: string;
	customerSurname: string;
	customerCreditCardNo: string;
	customerCreditCardCin: string;
	customerCreditCardExpiresAt: string;

	payment: Payment;

}
