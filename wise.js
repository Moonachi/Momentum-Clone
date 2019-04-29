const wise = document.querySelector(".js-wise");

const wiseArr = [
  "Think like a man of action and act like man of thought.",
  "Courage is very important. Like a muscle, it is strengthened by use.",
  "Good fences makes good neighbors.",
  "Give me liberty, or give me death.",
  "Things are always at their best in the beginning.",
  "Life itself is a quotation.",
  "Habit is second nature.",
  "A minute’s success pays the failure of years.",
  "The will of a man is his happiness.",
  "Suspicion follows close on mistrust.",
  "Great art is an instant arrested in eternity.",
  "Pain past is pleasure.",
  "Faith without deeds is useless.",
];

function paintWise() {
  const size = wiseArr.length;
  const index = Math.floor(Math.random() * size);

  wise.innerText = `"${wiseArr[index]}"`;
}

function init() {
  paintWise();
  setInterval(paintWise, 10000);
}

init();
