'use client';

import React from 'react';

export interface errorProps {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: errorProps) => {
  return (
    <>
      <p>Unexpected error inside slot sales</p>;
    </>
  );
};

export default error;
