import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SingUp';

import './authentification.css';

export default function Index() {
  const [log, setlog] = useState(false);
  return (
    <div className='welcome'>
      <div className='welcome-logo'>
        <img alt='logo' src='loginlogo.png' width='250' />
      </div>
      <div className='sign-container'>
        {!log ? (
          <SignIn />
        ) : (
          <SignUp setlog={setlog} log={log} />
        )}
        <button
          className='btn-log sign-button'
          onClick={() => setlog(!log)}>
          {log ? 'Se Connecter' : "S'inscrire"}
        </button>
      </div>
    </div>
  );
}
