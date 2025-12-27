// types.ts
import { Base } from './base';

export interface PaymentMethod {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Customer {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

export interface Payment {
  readonly id: string;
  readonly amount: number;
  readonly currency: string;
  readonly paymentMethod: PaymentMethod;
  readonly customer: Customer;
}

export interface PaymentStatus {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Transaction {
  readonly id: string;
  readonly payment: Payment;
  readonly status: PaymentStatus;
  readonly createdAt: Date;
}

export interface PaymentProcessorOptions {
  readonly paymentMethodId: string;
  readonly customerId: string;
  readonly paymentAmount: number;
  readonly currency: string;
}

export interface PaymentProcessorResult {
  readonly transaction: Transaction;
  readonly payment: Payment;
  readonly error: Error | null;
}

export class PaymentProcessor extends Base {
  constructor() {
    super();
  }

  public processPayment(options: PaymentProcessorOptions): Promise<PaymentProcessorResult> {
    // implement payment processing logic here
  }
}