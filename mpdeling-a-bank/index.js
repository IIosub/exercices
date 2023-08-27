const bankCostumer = {
  name: "Alex",
  balance: 0,
  credit: 0,

  describe() {
    return `owner: ${bankCostumer.name} balance ${bankCostumer.debit}`;
  },
};

bankCostumer.credit += 250;
bankCostumer.debit = bankCostumer.credit - 80;

console.log(bankCostumer.describe());
