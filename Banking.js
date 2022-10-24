document.getElementById("button-deposit").addEventListener('click', function () {
    const inputDeposit = document.getElementById("input-deposit");
    const amountDepositText = inputDeposit.value;
    const amountDeposit = parseFloat(amountDepositText);

    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText =  totalDeposit.innerText;
    const previousTotalDeposit = parseFloat(totalDepositText);
    totalDeposit.innerText = previousTotalDeposit + amountDeposit;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText =  totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance + amountDeposit;
    inputDeposit.value = "";
});

document.getElementById("button-withdrow").addEventListener('click', () => {
    const inputWithdrow = document.getElementById("input-withdrow");
    const amountWithdrowText = inputWithdrow.value;
    const amountWithdrow = parseFloat(amountWithdrowText);

    const totalWithdrow = document.getElementById('total-withdrow');
    const totalWithdrowText =  totalWithdrow.innerText;
    const previousTotalWithdrow = parseFloat(totalWithdrowText);
    totalWithdrow.innerText = previousTotalWithdrow + amountWithdrow;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText =  totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance - amountWithdrow;   
    inputWithdrow.value = "";

});


    
    