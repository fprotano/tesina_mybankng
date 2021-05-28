import { TransactionUniqueId } from './transaction-unique-id';

export class InternalTransaction {
	
	id: number;
	createdAt: Date;
	customCode: string;
	transactionId: string;
	amount: number;
	fromAccountId: number;
	toAccounId: number;
	
	transactionUniqueId: TransactionUniqueId;
	account: Account;
	
}
