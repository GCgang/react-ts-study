import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

export default function Form() {
  const [value, setValue] = useState('');
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </Container>
  );
}
