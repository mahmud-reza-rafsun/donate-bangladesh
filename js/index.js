const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');

historyBtn.addEventListener('click', function(){
    showHistoryElements('donation-btn');
})

donationBtn.addEventListener('click', function(){
    showDonationElement('history-btn')
});



