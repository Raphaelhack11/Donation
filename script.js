function togglePayment() {
  const paymentBox = document.getElementById("payment-options");
  paymentBox.classList.toggle("show");
}

function showBitcoin() {
  const btcBox = document.getElementById("bitcoin-box");
  btcBox.classList.toggle("show");
}

function copyWallet() {
  const walletInput = document.getElementById("wallet");
  walletInput.select();
  walletInput.setSelectionRange(0, 99999); // mobile support
  navigator.clipboard.writeText(walletInput.value);
  alert("Wallet address copied!");
}

function redirectThankYou() {
  window.location.href = "./thankyou.html";
}
