import React from 'react';

import Box from '../Box';
import Message from '../Message';
import type { MessageProps } from '../Message/Message';

export interface BulletinProps {
  messages: MessageProps[];
}

export default function Bulletin({ messages }: BulletinProps) {
  return (
    <Box
      display='flex'
      flexDirection='row'
      preserveAspectRatio='4'
      is='div'
      overflowX='scroll'
      overflowY='hidden'
    >
      {messages.map((_message) => (
        <Message className='customclass' clickable>
          <Message.Container>
            <Message.Header>
              <Message.Name>Haylie George</Message.Name>
              <Message.Username>@haylie.george</Message.Username>
              <Message.Roles>
                <Message.Role>Admin</Message.Role>
                <Message.Role>User</Message.Role>
                <Message.Role>Owner</Message.Role>
              </Message.Roles>
              <Message.Timestamp>12:00 PM</Message.Timestamp>
            </Message.Header>
            <Message.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam...
            </Message.Body>
          </Message.Container>
        </Message>
      ))}
    </Box>
  );
}
