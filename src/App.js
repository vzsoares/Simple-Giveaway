import "./App.css";
import $ from "jquery";
import React, { useState } from "react";

function App() {
  const [winnersArray, setWinnersArray] = useState([]);
  const [winnersExist, setWinnersExist] = useState(false);
  function Get_winners() {
    // variables
    var range_start = Number($("#number-range-start").val());
    var range_end = Number($("#number-range-end").val());
    var amount_of_winners = Number($("#number-winners").val());
    var winners = [];
    // functions

    // no negative number allowed
    if (range_end <= 0 || range_start < 0 || amount_of_winners <= 0) {
      window.alert("Invalid input!");
      return;
    }
    // avoid more winners than prize
    if (amount_of_winners >= range_end - range_start + 2) {
      $(".amount-of-winners").css("color", "red");
      $("#number-winners").css("color", "red");
      window.alert("Too many winners");
      return;
    } else {
      $(".amount-of-winners").css("color", "");
      $("#number-winners").css("color", "");
    }
    // get random number
    for (let index = 0; index < amount_of_winners; ) {
      var random = Math.round(Math.random() * range_end);
      if (
        !winners.includes(random) &&
        random <= range_end &&
        random >= range_start
      ) {
        index++;
        winners.push(random);
      }
    }
    // get numbers for copy
    const winners_array = winners;
    setWinnersArray(winners_array.filter((x) => isFinite(x)));
    // insert winners in DOM
    winners.forEach((e) => {
      winners.push(`<div class='winner-block'>${e}</div>`);
    });
    $(".winners").html(winners.filter((x) => isNaN(x)).join(""));
    setWinnersExist(true);
  }
  // copy to clipboard and alert user
  const copyWinners = () => {
    navigator.clipboard.writeText(winnersArray.join());
    alert("Winners Copied!!!");
  };
  return (
    <div className='App'>
      <div className='hero'>
        <div className='title'>
          <h1>Simple Giveaway</h1>
        </div>
        <div className='number-range'>
          <input
            type='number'
            id='number-range-start'
            className='number-input'
            defaultValue='0'
            min='0'
          />
          <p>to</p>
          <input
            type='number'
            id='number-range-end'
            className='number-input'
            defaultValue='1000'
            min='1'
          />
        </div>
        <div className='number-amount'>
          <p className='amount-of-winners'>Amount Of Winner(s): </p>
          <input
            type='number'
            id='number-winners'
            className='number-input'
            defaultValue='1'
            min='1'
          />
        </div>
        <div className='number-results'>
          <button
            type='button'
            className='generate-winners'
            onClick={Get_winners}
          >
            Choose Winner(s)
          </button>
          <p>Winner(s):</p>
          <div className='winners'></div>
          {winnersExist && (
            <button
              type='button'
              className='generate-winners'
              onClick={copyWinners}
              style={{ marginTop: "1.5rem" }}
            >
              Copy Winner(s)
            </button>
          )}
        </div>
        <div className='footer'>
          <div className='space'></div>
          <a
            href='https://github.com/vzsoares'
            target='_blank'
            rel='noreferrer'
            className='github'
          >
            <i className='fab fa-github-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
