// toggle page blog
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})
// toggle donation
const historyBtn = getElementById('history-btn')
const historyContainer = getElementById('history-container');
historyBtn.addEventListener('click', function(){
    showHistoryElements('donation-btn');
})
// toggle history
const donationBtn = getElementById('donation-btn')
const donationContainer = getElementById('donation-container');
donationBtn.addEventListener('click', function(){
    showDonationElement('history-btn')
});