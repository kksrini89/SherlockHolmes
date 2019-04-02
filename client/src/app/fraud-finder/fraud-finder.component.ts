import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

import { TransactionData } from '../services/transactions';
import { RootObject, Children } from '../models/transaction';

@Component({
  selector: 'app-fraud-finder',
  templateUrl: './fraud-finder.component.html',
  styleUrls: ['./fraud-finder.component.css']
})
export class FraudFinderComponent implements OnInit {
  transactionId: String = '';
  confidenceLevel: Number = 1;
  filteredTransactions: Array<Children> = new Array<Children>();
  displayedColumns: string[] = ['Transaction Id', 'Connection Info', 'Confidence Level', 'Name', 'Email', 'Phone', 'Age'];

  constructor(public transactionData: TransactionData) {}

  ngOnInit() {}

  search() {
    try {
      const transactionItem: RootObject = this.transactionData.searchTransactionById(
        this.transactionId
      );
      const transactionInput: RootObject = transactionItem;
      const rootIndexItem: Children = Object.assign({}, transactionInput, { childrens: null });
      // tslint:disable-next-line:prefer-const
      let results: Array<Children> = [rootIndexItem];
      for (const iterator of transactionInput.childrens) {
        if (iterator['childrens'] !== undefined) {
          if (iterator['childrens'].length > 0) {
            // tslint:disable-next-line:prefer-const
            let flattenedTransactions = [];
            this.flattenTransactions(flattenedTransactions, iterator['childrens']);
            results.push(...flattenedTransactions);
          } else {
            results.push(iterator);
          }
        }
      }
      this.filteredTransactions = results;
      // const flattenedTransactions = flattenDeep(transactionItem.childrens);
      // const result = [rootIndexItem, ...flattenedTransactions];
    } catch (error) {
      throw error;
    }
  }

  private flattenTransactions(transactions, item: Array<Children>): void {
    try {
      if (item !== null && Array.isArray(item) && item.length > 0) {
        for (const i of item) {
          if (typeof i['childrens'] !== undefined) {
            i['childrens'].length > 0 ? this.flattenTransactions(transactions, i['childrens']) : transactions.push(i);
          }
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
