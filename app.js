let currentUser = null;

// LOGIN
function login() {
  const name = document.getElementById("username").value;
  if (!name) return alert("enter name");

  currentUser = name;

  if (!localStorage.getItem("user_" + name)) {
    localStorage.setItem("user_" + name, JSON.stringify({
      skills:{}, quests:{}
    }));
  }

  document.getElementById("loginBox").style.display="none";
  document.getElementById("userInfo").style.display="block";
  document.getElementById("currentUser").innerText = name;
}

function logout(){
  currentUser=null;
  document.getElementById("loginBox").style.display="block";
  document.getElementById("userInfo").style.display="none";
}


// TAB SWITCH
function openTab(tab){
  document.querySelectorAll(".tab-content").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));

  document.getElementById(tab).classList.add("active");
}


// XP FORMULA
function getXP(l){
  let xp=0;
  for (let i=1;i<l;i++){
    xp+=Math.floor(i+300*Math.pow(2,i/7));
  }
  return Math.floor(xp/4);
}


// XP CALC
function calcXP(){
  let c = +document.getElementById("xpCurrent").value;
  let t = +document.getElementById("xpTarget").value;
  let rate = +document.getElementById("xpRate").value;

  let needed = getXP(t)-getXP(c);
  let time = rate ? (needed/rate).toFixed(2) : "N/A";

  document.getElementById("xpOut").innerText =
    "XP Needed: "+needed+" | Hours: "+time;
}


// TIME
function calcTime(){
  let c = +document.getElementById("timeCurrent").value;
  let t = +document.getElementById("timeTarget").value;
  let rate = +document.getElementById("timeRate").value;

  let needed = getXP(t)-getXP(c);
  let hours = needed/rate;

  document.getElementById("timeOut").innerText =
    "Total Hours: "+hours.toFixed(2);
}


// PROFIT
function calcProfit(){
  let xp = +document.getElementById("xpAction").value;
  let actions = +document.getElementById("actionsHr").value;
  let cost = +document.getElementById("cost").value;
  let rev = +document.getElementById("revenue").value;

  let xpHr = xp*actions;
  let profitHr = (rev-cost)*actions;

  document.getElementById("profitOut").innerText =
    "XP/hr: "+xpHr+" | Profit/hr: "+profitHr;
}
