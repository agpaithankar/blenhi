const accountCheck = require('./accountTypeCheck');

test('check whether acoount type is B', () => {
    const accountBalanceHistory = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 200 },
          },
        }
      ]
    expect(accountCheck.accountTypeChecker(accountBalanceHistory)).toBe('B');
});

test('check whether acoount type is A', () => {
    const accountBalanceHistory = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 150 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 200 },
          },
        }
      ]
    expect(accountCheck.accountTypeChecker(accountBalanceHistory)).toBe('A');
});

test('check  acoount type when there is no decrese', () => {
    const accountBalanceHistory = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 100 },
          },
        }
      ]
    expect(accountCheck.accountTypeChecker(accountBalanceHistory)).toBe('B');
});

test('check  acoount type when result is not sorted', () => {
    const accountBalanceHistory = [
        {
          monthNumber: 1, // current month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 0, // last month
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 200 },
          },
        }
      ]
    expect(accountCheck.accountTypeChecker(accountBalanceHistory)).toBe('B');
});