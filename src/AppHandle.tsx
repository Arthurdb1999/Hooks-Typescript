import React, { useRef, useImperativeHandle } from 'react';

import Form, { FormRef } from './Form';

const AppHandle: React.FC = () => {
    const formRef = useRef<FormRef>(null);

    function handleSubmite() {
        formRef.current?.submit();
    }

  return (
    <Form ref={formRef} />
  );
}

export default AppHandle;