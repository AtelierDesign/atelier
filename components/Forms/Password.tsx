import React from 'react';
import { ChakraProvider, InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react';

export const Password = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <ChakraProvider>
      <InputGroup size="md">
        <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </ChakraProvider>
  );
};
