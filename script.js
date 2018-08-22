var statusText = document.getElementById('status-text');

var prevNum = document.getElementById('previous-number-guessed');

var result = document.getElementById('result-of-guessed-text');

var rangeBottom = document.getElementById('range-min');

var rangeTop = document.getElementById('range-max');

var rangeBtn = document.getElementById('submit-range');

var guess = document.getElementById('guess');

var submitBtn = document.getElementById('submit');

var clearBtn = document.getElementById('clear');

var resetBtn = document.getElementById('reset');

var num = Math.floor(Math.random() * 100);

var level = document.getElementById('level').innerText;

var levelString = level.toString();

function statusUpdate(x, y, z) {
  statusText.innerHTML = x;
  prevNum.innerHTML = y;
  result.innerHTML = z;
};

function getRange() {
  rangeBottom = rangeBottom.value;
  rangeTop = rangeTop.value;
  rangeBottom = parseInt(rangeBottom);
  rangeTop = parseInt(rangeTop);
  num = Math.floor(Math.random() * (rangeTop - rangeBottom) + rangeBottom);

  if (isNaN(rangeBottom) || isNaN(rangeTop)) {
    statusUpdate('Your range was not an integer.', 'X', 'Please enter a number (e.g. 150)');
    } 
  else {
    statusUpdate('Your range was accepted', ':)', 'Now enter a guess within your range!')
  }
};

function game() {
  guess = document.getElementById('guess').value;
  guess = (parseInt(guess));
  rangeTop = (parseInt(rangeTop));
  rangeBottom = (parseInt(rangeBottom));

  if (isNaN(guess)) {
    statusUpdate('Your last guess was not an integer.', 'X', 'Please enter a number (e.g. 50)');
  } 
  else if (guess < rangeBottom || guess > rangeTop) {
    statusUpdate('Your last guess was out of range.', 'X', 'Please enter a number within range');
  } 
  else if (guess < num) {
    statusUpdate('Your last guess was', guess, 'That is too low');
  } 
  else if (guess > num) {
    statusUpdate('Your last guess was', guess, 'That is too high');
  } 
  else if (guess == num) {
    statusUpdate('Level up! expanding range +- 10!', guess, 'BOOM!');
    return (rangeTop = rangeTop + 10) 
    + (rangeBottom = rangeBottom - 10)
    + (document.getElementById('range-min').value = rangeBottom) 
    + (document.getElementById('range-max').value = rangeTop) 
    + (num = Math.floor(Math.random() * (rangeTop - rangeBottom) + rangeBottom))
    + (level++)
    + (levelString = level.toString())
    + (document.getElementById('level').innerText = levelString);
  } 
  else {
    statusUpdate('ERROR', 'X', 'ERROR');
  }
};

function reloadGame() {
  document.location.reload(false);
};

rangeTop.addEventListener('keyup', function() {
  if (rangeBottom.value !== '' && rangeTop.value !== '') {
    rangeBtn.disabled = false;
    resetBtn.disabled = false;
  } 
  else {
    rangeBtn.disabled = true;
    resetBtn.disabled = true;
  }
});

rangeBottom.addEventListener('keyup', function() {
  if (rangeBottom.value !== '' && rangeTop.value !== '') {
    rangeBtn.disabled = false;
    resetBtn.disabled = false;
  } 
  else {
    rangeBtn.disabled = true;
    resetBtn.disabled = true;
  }
});

guess.addEventListener('keyup', function() {
  if (guess.value !== '') {
    submitBtn.disabled = false;
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  } 
  else {
    submitBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.disabled = true;
  }
});

guess.addEventListener('keyup', function() {
  if (document.getElementById('range-max').value == '') {
    return rangeTop = 100;
  } 
  else {
    return rangeTop = document.getElementById('range-max').value;
  }
})

guess.addEventListener('keyup', function() {
  if (document.getElementById('range-min').value == '') {
    return rangeBottom = 1;
  } 
  else {
    return rangeBottom = document.getElementById('range-min').value;
  }
})

clearBtn.addEventListener('click', function() {
  guess = guess.toString();
  document.getElementById('guess').value = '';
  submitBtn.disabled = true;
  clearBtn.disabled = true;
});