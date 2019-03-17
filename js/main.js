'use strict'
console.log('Ex2');
var gNumOfCells = 16;
var gIsTrueCounter = 1;

createNums()
function createNums() {
    var tempNums = [];
    var nums = [];
    for (let i = 0; i < gNumOfCells; i++) {
        tempNums.push(i + 1);
    }
    for (let i = gNumOfCells; i > 0; i--) {
        var tempNum = tempNums.splice(Math.floor(Math.random() * Math.floor(i)), 1);
        nums.push(tempNum[0]);
        tempNum = null;
    }
    createCells(nums);
}


function createCells(nums) {
    var strHtml = '';
    var numOfRows = null;
    var numOfCols = 4;
    if (gNumOfCells % 4 === 0) {
        numOfRows = gNumOfCells / 4;
    } else {
        numOfRows = (gNumOfCells / 4) + 1;
    }

    for (let i = 0; i < numOfRows; i++) {
        strHtml += '<tr>';
        for (let j = 0; j < numOfCols; j++) {
            var cellValue = nums.pop();
            strHtml += `<td onclick = "cellClicked(this)">
            ${cellValue}
            </td>`
        }
        strHtml += '</tr>';
    }
    var table = document.querySelector('.board');
    table.innerHTML = strHtml;
}


function cellClicked(clickedNum) {
    var colorCell = clickedNum;
    var currCell = +clickedNum.outerText;
    if (currCell === gIsTrueCounter) {
        console.log('Right');
        gIsTrueCounter++
        colorCell.classList.add("correct");
    }
    else {
        console.log('Wrong');
    }
    if (gIsTrueCounter === gNumOfCells) {
        console.log('Game won!!!');
        
    }
}

dqs