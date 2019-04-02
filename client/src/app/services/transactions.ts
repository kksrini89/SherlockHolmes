import { Injectable } from '@angular/core';
import { RootObject } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionData {
  transactions = [
    {
      id: '5c8657845d3dc63c6d5bb643',
      index: 0,
      age: 36,
      name: 'Christa Murray',
      email: 'christamurray@equicom.com',
      phone: '(989) 478-3521',
      connectionInfo: {
        type: 'sameGeoInfo',
        confidence: 1
      },
      geoInfo: {
        latitude: 43.903515,
        longitude: 35.924001
      },
      childrens: [
        {
          id: '5c86578486f3aa844adf8bba',
          index: 0,
          age: 28,
          name: 'Frazier Conrad',
          email: 'christamurray@equicom.com',
          phone: '(948) 443-3884',
          connectionInfo: {
            type: 'sameEmail',
            confidence: 1
          },
          geoInfo: {
            latitude: 80.58013,
            longitude: 41.759403
          }
        }
      ]
    }
  ];
  constructor() {}

  getTransactions() {
    try {
      return this.transactions;
    } catch (error) {
      throw error;
    }
  }

  searchTransactionById(id) {
    try {
      const transactionItem: RootObject = this.transactions.find(
        transaction => transaction.id === id
      );
      return transactionItem;
    } catch (error) {
      throw error;
    }
  }
}
