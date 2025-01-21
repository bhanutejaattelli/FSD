class BankAccount {
    constructor(accountHolder, balance) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }

      deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} deposited. New balance: ${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. New balance: ${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient balance.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  }
  
  function transfer(fromAccount, toAccount, amount) {
    if (amount > 0 && fromAccount.balance >= amount) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      console.log(`Transferred ${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}`);
    } else if (amount <= 0) {
      console.log("Transfer amount must be positive.");
    } else {
      console.log("Insufficient balance for transfer.");
    }
  }
  
  const account1 = new BankAccount("Alice", 500);
  const account2 = new BankAccount("Bob", 300);
  
  console.log("Initial balances:");
  console.log(`${account1.accountHolder}: ${account1.balance}`);
  console.log(`${account2.accountHolder}: ${account2.balance}`);
  
  account1.deposit(200);
  account1.withdraw(100);
  transfer(account1, account2, 150);
  
  console.log("Final balances:");
  console.log(`${account1.accountHolder}: ${account1.balance}`);
  console.log(`${account2.accountHolder}: ${account2.balance}`);
  