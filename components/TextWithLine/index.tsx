import { useColorModeValue, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { line } from '../../lib/chakra/colors';

function TextWithLine({ children }: { children: ReactNode}): JSX.Element {
  const lineColor = useColorModeValue(line.light, line.dark);
  return (
    <Text
      _after={{
        backgroundColor: lineColor,
        content: '" "',
        display: 'block',
        height: '1px',
        margin: '0 15px',
        width: '100%',
      }}
      alignItems="center"
      display="flex"
      fontSize="16px"
      fontWeight="500"
      letterSpacing=".5px"
      marginY="1rem"
      opacity=".6"
      textTransform="uppercase"
    >
      {children}
    </Text>
  );
}

export default TextWithLine;
