const accountTypeChecker = (accountBalanceHistory) => {
  let checkType = {}, accountBalance= {};
  for(const account of accountBalanceHistory){
	accountBalance[account.monthNumber]= account.account.balance.amount;
  }
  for(let i=0; i < accountBalanceHistory.length -1 ; i++){
    let ind = i + 1;
    let diffrence = accountBalance[ind.toString()] - accountBalance[i.toString()];
    if( diffrence > 0){
      checkType[diffrence]=1;	
    }
  }
  return Object.keys(checkType).length > 1 ? 'A':'B';
};
module.exports = {accountTypeChecker};