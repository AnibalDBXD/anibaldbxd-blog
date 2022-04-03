import { SearchIcon } from '@chakra-ui/icons';
import {
  InputGroup, InputLeftElement, Input, InputProps,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

interface ISearchProps extends InputProps {
    setValue?: (value) => void;
}

const Search: FC<ISearchProps> = ({ setValue, value, ...props }) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setValue?.(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none"><SearchIcon /></InputLeftElement>
      <Input {...props} onChange={({ target }): void => setInputValue(target.value)} placeholder="Search a review :)" value={inputValue} />
    </InputGroup>
  );
};

export default Search;
