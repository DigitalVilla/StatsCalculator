var numbers, total, count, mean, median, mode, range, enable, btnOn, numMapping, i, elemnt;

var numberslist = document.getElementById("numbersList");
var display = document.getElementById("display");
var input = document.getElementById("input");
var infoB = document.getElementById("infoBlock");
var startBtn = document.getElementById("startbtn");
init();

//Key "Enter" Also adds number 
document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        btnAdd();
    }
});

//
document.addEventListener('click', function (e) {
    if (btnOn) {
        if (e.target.id == 'add') {
            btnAdd();
        } else if (e.target.id == 'calc') {
            btnCalculate();
            display.textContent = total;
            input.placeholder = "Reset to continue..."
            btnOn = false;
        }
    }
    if (!btnOn) {
        if (e.target.innerText == 'Mean') {
            display.textContent = mean;
            displayCalcs(e);
        } else if (e.target.innerText == 'Median') {
            display.textContent = median;
            displayCalcs(e);
        } else if (e.target.innerText == 'Mode') {
            display.textContent = mode;
            displayCalcs(e);
        } else if (e.target.innerText == 'Range') {
            display.textContent = range;
            displayCalcs(e);
        } else if (e.target.innerText == 'Count') {
            display.textContent = count;
            displayCalcs(e);
        } else if (e.target.innerText == 'Total') {
            display.textContent = total;
            displayCalcs(e);
        }
    }
    if (e.target.id == 'info') {
        infoB.style.display = "block";

    }
    if (e.target.id == 'xOut' || e.target.id == 'reset') {
        infoB.style.display = "none";
    }

    if (e.target.id == 'reset') {
        init();
    }
});

function btnAdd() {
    if (input.value == parseInt(input.value, 10)) {
        var number = parseInt(input.value);
        numbers.push(number);
        input.value = "";
        enable = true;

        // numberslist.style.display = "block";
        numberslist.textContent = String(numbers);

    } else {
        input.value = "Enter a Valid Number!"
        i = "del";
    }
};
input.addEventListener('click', function () {
    input.value = "";
});

function btnCalculate() {
    sortNumbers();
    calculateTotals();
    calculateMean();
    calculateMedian();
    calculateMode();
    calculateRange();
    numberslist.textContent = String(numbers);
    console.log(numbers, " = ", total)
};

function sortNumbers() {
    numbers.sort(function (a, b) {
        return a - b;
    });
};

function calculateTotals() {
    // numbers total
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i]
        count = numbers.length
    }
};

function calculateMean() {
    //numbers total/numbers.count
    mean = (total / count).toFixed(2)
};

function calculateMedian() {
    //if odd median = middle
    //if even m = mean of middles
    var indx = Math.floor(count / 2)
    if (count % 2 == 0) {
        median = (numbers[indx] - numbers[indx - 1]) / 2
    } else {
        median = numbers[indx]
    }
};

function calculateMode() {
    //			debugger;

    var greatestFreq = 0;
    numbers.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number
        }
    });
    if (greatestFreq = 0) {
        mode = 00;
    }
    return mode;

};

function calculateRange() {
    //largest value - smallest
    range = (numbers[count - 1] - numbers[0])
};

function displayCalcs(e) {
    elemnt = document.querySelector('.active');
    elemnt.className = '';
    e.target.className = 'active';
}

function init() {
    numbers = [];
    total = 0;
    count = 0;
    mean = 0;
    median = 0;
    mode = 0;
    range = 0;
    btnOn = true;
    input.value = "";
    numMapping = {};
    display.textContent = "00.00";
    input.value = "";
    input.placeholder = "Enter a Number...";
    numberslist.textContent = "Values list";
    //unselect all all elements and select the startbtn only 
    elemnt = document.querySelector('.active');
    elemnt.className = '';
    startBtn.className = 'active';
};
