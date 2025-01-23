import { Blockquote } from '@mantine/core';
import { IconQuotes } from '@tabler/icons-react';

interface QuoteProps {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <Blockquote
      color="violet"
      radius="lg"
      iconSize={36}
      cite={author}
      icon={<IconQuotes size={36} />}
      mt="xl"
    >
      {quote}
    </Blockquote>
  );
};
