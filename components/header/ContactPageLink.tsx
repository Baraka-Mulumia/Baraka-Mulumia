import React, { FunctionComponent } from 'react';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const ContactPageLink: FunctionComponent = () => {
  return (
    <Link href='/get-in-touch'>
      <Button variant={'primaryOutline'}>Get in Touch</Button>
    </Link>
  );
};

export default ContactPageLink;
