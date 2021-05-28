import { TransactionStatus } from './transaction-status';
import { TransactionUniqueId } from './transaction-unique-id';

export class ExternalTransaction {
	id: number;
	createdAt: Date;
	customCod: string
	transactionId: string;
	amount: number;
	toAccountId: number;
	transactionStatusId: number;
	transactionErrorReason: string;
	verifyAssignedTo: number;
	customerName: string;
	customerSurname: string;
	customerCreditCardNo: string;
	customerCreditCardCin: string;
	customerCreditCardExpiresAt: string;
	
	transactionUniqueId: TransactionUniqueId;
	transactionStatus: TransactionStatus;
	
	
}
