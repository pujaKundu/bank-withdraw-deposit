//handle deposit button handle
document.getElementById('deposit-button')
    .addEventListener('click', function() {
        //get amount deposited
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmount = parseFloat(depositInput.value);


        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmount = parseFloat(depositTotal.innerText);
        const newDepositTotal = previousDepositAmount + newDepositAmount;
        depositTotal.innerText = newDepositTotal;
        // console.log(typeof(newDepositAmount));
        // console.log(typeof(newDepositTotal))
        // console.log(typeof(previousDepositAmount))
        //clear the deposit input field
        depositInput.value = '';

        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = parseFloat(balanceTotal.innerText);

        const newBalanceTotal = newDepositTotal + previousBalanceAmount;
        balanceTotal.innerText = newBalanceTotal;

    })

//handle withdraw button
document.getElementById('withdraw-button').addEventListener(
    'click',
    function() {
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmount = parseFloat(withdrawInput.value);
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
        const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
        withdrawTotal.innerText = newWithdrawTotal;
        //clear 
        withdrawInput.innerText = '';
        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = parseFloat(balanceTotal.innerText);

        const newBalanceAfterWithdraw = previousBalanceAmount - newWithdrawTotal;
        balanceTotal.innerText = newBalanceAfterWithdraw;
        console.log(newBalanceAfterWithdraw)
    }
)