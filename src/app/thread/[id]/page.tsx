'use client';
import React from 'react';

const ThreadPage = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ThreadPage;
