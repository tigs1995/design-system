export type Report = {
    accounts: Account[],
    personal: {
      electoralRoll: ElectoralRoll[],
      publicInfo: {
        courtAndInsolvencies: [
            {
                name: string,
                dob: string,
                courtName: string,
                contextKey: string,
                dischargeDate: string,
                caseReference: string,
                amount: Amount,
                address: Address,
                type: {
                    code: string,
                    details: {
                    catDesc: string
                    }
                },
                startDate: string
            },
        ]
      }
    }
  }

type Address = {
    buildingName: string,
    format: string,
    postcode: string,
    street: string,
    town: string
}

type Amount = {
    amount: number,
    currency: string
}

export type Account = {
  accountCategory: string,
  accountNumber: string,
  address: Address,
  contentKey: string,
  displayName: string,
  key: string,
  name: string,
  overview: {
    lastUpdated: string,
    utilization: number,
    balance: Amount,
    frequency: string,
    limit: Amount,
    accountOpened: string
  },
  paymentHistory:
    {
      month: number,
      paymentStatus: string,
      year: number
    }[],
  status: string,
  supplierName: string
}

export type ElectoralRoll = {
  address: Address,
  contextKey: string,
  current: boolean,
  endDateString: string,
  name: string,
  startDateString: string,
  supplied: string
};
