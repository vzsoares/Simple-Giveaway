import "./App.css";
import $ from "jquery";

function App() {
  function Get_winners() {
    // variables
    var range_start = Number($("#number-range-start").val());
    var range_end = Number($("#number-range-end").val());
    var amount_of_winners = Number($("#number-winners").val());
    var winners = [];
    // functions
    for (let index = 0; index < amount_of_winners; ) {
      var random = Math.floor(Math.random() * (range_end - range_start));
      if (!winners.includes(random)) {
        index++;
        winners.push(random);
      }
    }
    winners.forEach((e) => {
      winners.push(`<div class='winner-block'>${e}</div>`);
    });
    $(".winners").html(winners.filter((x) => isNaN(x)).join(""));
  }
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
          />
          <p>to</p>
          <input
            type='number'
            id='number-range-end'
            className='number-input'
            defaultValue='1000'
          />
        </div>
        <div className='number-amount'>
          <p className='amount-of-winners'>Amount Of Winner(s): </p>
          <input
            type='number'
            id='number-winners'
            className='number-input'
            defaultValue='1'
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
