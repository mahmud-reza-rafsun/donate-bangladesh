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
    const addMoney = getInputValueById('add-money');

    const currentBalance = getTextValueById('current-balance');
    const money = getTextValueById('money')

    const newBalance = currentBalance - addMoney.toFixed(2);
    const newMoney = addMoney + money;

    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('money').innerText = newMoney.toFixed(2);

    document.getElementById('my_modal_5').classList.remove('hidden');

    if(newMoneyNumber <= 0 || isNaN(newMoneyNumber)){
        document.getElementById('worning').classList.remove('hidden');
        return;   
    }

    const historyItems = document.createElement('div');
    historyItems.className = 'border-indigo-500 p-4 border-2 rounded-lg mb-3'

    historyItems.innerHTML = `
        <h2 class="text-lg font-bold mb-3">${newMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
        <p class="text-gray-600 font-light">Date: ${new Date().toString()}</p>
    `;

    const historyData = document.getElementById('history-data');
    historyData.appendChild(historyItems);
})
    