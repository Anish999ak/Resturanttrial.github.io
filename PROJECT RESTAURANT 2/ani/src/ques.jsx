import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [name, setName] = useState('');
  const handleClick = () =>{
    if(!name){
      alert ('please enter your name')
    }
  }
  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form>
              <div>
                <label>Username/Email</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input />
                <div></div>
              </div>
              <button onClick={handleClick()}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));