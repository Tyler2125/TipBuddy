import React from "react";
import { useState, useEffect } from "react";

function Form() {
  // States
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [total, setTotal] = useState("");
  function calculate(e) {
    e.preventDefault();
    const tipChange = parseInt(tip) / 100; //changes input to a number
    const changebill = parseInt(bill);
    const split = parseInt(people);
    const billTotal = (tipChange * changebill) / split;
    setTotal(billTotal.toFixed(2));
  }
  function resetForm(e) {
    const form = document.getElementById("calculator");
    form.reset();
  }
  useEffect(() => {
    setTotal(total);
  }, [total]);
  return (
    <div className='tip-form'>
      <form id='calculator' name='calculator'>
        <h1>
          <span class='dollar'>$</span>Tip Buddy{" "}
        </h1>
        <small>Make Calculating your tip easier</small>
        <br></br>
        <label>Bill Total:</label>
        <input
          id='Total'
          name='total'
          type='text'
          placeholder='Enter the Total amount of your bill'
          required
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
        <label>Percentage</label>
        <input
          type='number'
          name='percentage'
          min='0'
          max='100'
          placeholder='%'
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
        <span></span>
        <label> People paying</label>
        <input
          id='Split'
          type='number'
          name='split'
          min='1'
          max='100'
          placeholder='How Many People are paying?'
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          required
        />
        <p>
          <small>
            <i>
              <span id='note'> Note: </span>If You're not dividing the bill
              please select "1" as your option
            </i>
          </small>
        </p>

        {total > 0 && (
          <div className='results'>
            <h3>Each Person Should pay ${total} as the tip.</h3>
          </div>
        )}
        <br></br>
        <button onClick={calculate} id='Calculate'>
          Calculate
        </button>
        <button onClick={resetForm} id='reset'>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
