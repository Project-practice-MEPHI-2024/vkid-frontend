'use client';
import React from 'react';
import {useThreadStore} from '@/entities/thread/stores/threadStore';
import {Thread} from '@/entities/thread/types/threadTypes';
import {state} from 'sucrase/dist/types/parser/traverser/base';

const ThreadPage = ({params}: {params: {id: string}}) => {
  const threads = useThreadStore(state => state.threads);
  const thread = useThreadStore(state => state.threads).find(
    thread => thread.ID === params.id,
  );
  console.log(threads);
  return (
    <div>
      <h1>{thread?.title}</h1>
    </div>
  );
};

export default ThreadPage;
