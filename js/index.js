
// Flood at Noakhali
const donationBtnN = getElementById('donation-n-btn');
donationBtnN.addEventListener('click', function(){
    // get input value
    const addMoney = getInputValueById('add-donation');
    // get text value
    const currentBalance = getTextValueById('current-balance');
    const money = getTextValueById('money')
    // calculation money
    const newBalance = currentBalance - addMoney.toFixed(2);
    const newMoney = addMoney + money;
    // set new value to balance
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('money').innerText = newMoney.toFixed(2);
    // show modal
    document.getElementById('my_modal_5').classList.remove('hidden');
    // error check
    if(addMoney <= 0 || isNaN(addMoney)){
        document.getElementById('worning').classList.remove('hidden');
        return;   
    }
    // history innerHTML    
    const historyItems = document.createElement('div');
    historyItems.className = 'border-gray-200 p-4 border-2 rounded-lg mb-3'

    historyItems.innerHTML = `
        <h2 class="text-lg font-bold mb-3">${addMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
        <p class="text-gray-600 font-light">Date: ${new Date().toString()}</p>
    `;
    const historyData = document.getElementById('history-data');
    historyData.insertBefore(historyItems, historyData.firstChild);
})

// Flood Relief in Feni
const donationFbtn = getElementById('donation-f-btn');
donationFbtn.addEventListener('click', function(){
    // get input value
    const addMoney = getInputValueById('add-donation-1');
    // get text value
    const currentBalance = getTextValueById('current-balance');
    const moneyOne = getTextValueById('money-1')
    // calculation money
    const newBalance = currentBalance - addMoney.toFixed(2);
    const newMoney = addMoney + moneyOne;
    // set new value to balance
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('money-1').innerText = newMoney.toFixed(2);
    // show modal
    document.getElementById('my_modal_5').classList.remove('hidden');
    // error check
    if(addMoney <= 0 || isNaN(addMoney)){
        document.getElementById('worning-1').classList.remove('hidden');
        return;   
    }
    // history innerHTML    
    const historyItems = document.createElement('div');
    historyItems.className = 'border-gray-200 p-4 border-2 rounded-lg mb-3'

    historyItems.innerHTML = `
        <h2 class="text-lg font-bold mb-3">${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p class="text-gray-600 font-light">Date: ${new Date().toString()}</p>
    `;
    const historyData = document.getElementById('history-data');
    historyData.insertBefore(historyItems, historyData.firstChild);
})

// Quota Movement
const donationQuotaBtn = getElementById('donation-quota-btn');
donationQuotaBtn.addEventListener('click', function(){
    // get input value
    const addMoney = getInputValueById('add-donation-2');
    // get text value
    const currentBalance = getTextValueById('current-balance');
    const moneyTow = getTextValueById('money-2')
    // calculation money
    const newBalance = currentBalance - addMoney.toFixed(2);
    const newMoney = addMoney + moneyTow;
    // set new value to balance
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('money-2').innerText = newMoney.toFixed(2);
    // show modal
    document.getElementById('my_modal_5').classList.remove('hidden');
    // error check
    if(addMoney <= 0 || isNaN(addMoney)){
        document.getElementById('worning-2').classList.remove('hidden');
        return;   
    }
    // history innerHTML    
    const historyItems = document.createElement('div');
    historyItems.className = 'border-gray-200 p-4 border-2 rounded-lg mb-3'

    historyItems.innerHTML = `
        <h2 class="text-lg font-bold mb-3">${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p class="text-gray-600 font-light">Date: ${new Date().toString()}</p>
    `;
    const historyData = document.getElementById('history-data');
    historyData.insertBefore(historyItems, historyData.firstChild);
})
