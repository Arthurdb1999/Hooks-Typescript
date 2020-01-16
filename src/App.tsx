import React, { useState, useMemo, useCallback, useRef, useReducer, useImperativeHandle, useContext } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => {
    users?.map(user => user.name).join(', ');
  }, [users])

  const greeting = useCallback(
    (name: string) => alert(`Hello ${name}`),
    []
  )

  async function loadData() {
    const response = await fetch('https://api.github.com/arthurdb1999');
    const data = await response.json();

    setUsers(data);
  }

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
   <form action="">
     <input type="text" ref={inputRef}/>
   </form>
  );
}

export default App;
