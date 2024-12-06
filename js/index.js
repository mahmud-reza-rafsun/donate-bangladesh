const donationBtn = getElementById('donation-btn')
const historyBtn = getElementById('history-btn')
const donationContainer = getElementById('donation-container');
const historyContainer = getElementById('history-container');

historyBtn.addEventListener('click', function(){
    showHistoryElements('donation-btn');
})

donationBtn.addEventListener('click', function(){
    showDonationElement('history-btn')
});

const donationBtnN = getElementById('donation-n-btn');
donationBtnN.addEventListener('click', function(){
    const addMoney = document.getElementById('add-money').value;
    const currentBalance = document.getElementById('current-balance').innerText;
    const money = document.getElementById('money').innerText;

    const newMoneyNumber = parseFloat(addMoney);
    const currentBalanceNumber = parseFloat(currentBalance)
    const moneyNumber = parseFloat(money);

    const newBalance = currentBalanceNumber - newMoneyNumber;
    const newMoney = newMoneyNumber + moneyNumber;

    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('money').innerText = newMoney;
})