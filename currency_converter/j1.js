function convert(event) {
  event.preventDefault();
  let usd = document.getElementById("usd");
  let ans = document.getElementById("ans");

  if (usd.value == "") {
    alert("amount is not entered");
    usd.focus();
    ans.innerHTML = "";
    return;
  }
  let aid = parseFloat(usd.value);
  if (aid < 0.0) {
    alert("Invalid amount");
    usd.value = "";
    usd.focus();
    ans.innerHTML = "";
    return;
  }
  let usdrate = 0.0;

  let urladd = "https://api.exchangerate-api.com/v4/latest/USD";
  fetch(urladd)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.rates.INR);
      usdrate = parseFloat(data.rates.INR);
      let air = aid * usdrate;
      let msg = air.toFixed(2);
      ans.innerHTML = msg;
    })
    .catch((err) => {
      console.log("issue" + err);
      ans.innerHTML = "issue" + err;
    });
}
