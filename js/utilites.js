// toggle page home
document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = './index.html';
});

function getElementById(id){
    const getElement = document.getElementById(id);
    return getElement;
}

function showHistoryElements(id){
    donationBtn.classList.add('text-gray-600', 'border-2', 'border-gray-300');
    donationBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('text-gray-600', 'border-2', 'border-gray-300');
    donationContainer.classList.add('hidden');
    historyBtn.classList.add('border-2')
    historyBtn.classList.add('border-[#B4F461]')

    historyContainer.classList.remove('hidden')
    return id;
}

function showDonationElement(id){
    donationBtn.classList.remove('text-gray-600', 'border-2', 'border-gray-300');
    donationBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('text-gray-600', 'border-2', 'border-gray-300');
    historyContainer.classList.add('hidden')
    donationBtn.classList.add('border-2')
    donationBtn.classList.add('border-[#B4F461]')

    donationContainer.classList.remove('hidden');
    return id;
}

function getInputValueById(id){
    return addMoney = parseFloat(document.getElementById(id).value);
}

function getTextValueById(id){
    return currentBalance = parseFloat(document.getElementById(id).innerText);
}