import { Loan } from './loan'

export class App {
	constructor() {
		this.heading = 'Loans'
		this.extraCash = 0
		this.loans = []
		this.rate = 0
		this.principle = 0
		this.minPayment = 0
	}

	addLoan() {
		this.loans.push(new Loan (this.principle, this.rate, this.minPayment))
	}
}

