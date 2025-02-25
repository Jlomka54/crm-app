'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface errorProps {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: errorProps) => {
  return (
    <>
      <p>{`Something went wrong. ${error.message}`}</p>;
      <Button onClick={() => reset()}>Try again</Button>;
    </>
  );
};

export default error;
