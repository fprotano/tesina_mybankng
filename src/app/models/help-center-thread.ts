import { HelpCenter } from './help-center';

export class HelpCenterThread {
	
	id: Number;
	createdAt: Date;
	helpCenterId: Number;
	question: String;
	answer: String;
	
	helpCenter: HelpCenter;
}
