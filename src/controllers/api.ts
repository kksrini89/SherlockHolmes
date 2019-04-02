import { Request, Response } from 'express';

import { RootObject } from './../models/transaction';

const transactions = [
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

export const getTransactions = async (req: Request, res: Response) => {
  return transactions;
};

export const searchTransactionById = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    if (!id) {
      throw new Error('Transaction Id is mandatory!');
    }
    const transactionItem: RootObject = transactions.find(
      (transaction: RootObject) => transaction.id === id
    );
    return transactionItem;
  } catch (error) {
    throw error;
  }
};
