import { HelpCenter } from './help-center';

export class HelpCenterThread {
	
	id: number;
	createdAt: Date;
	helpCenterId: number;
	question: string;
	answer: string;
	
	helpCenter: HelpCenter;
}
