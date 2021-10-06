import styled from "styled-components";

export const DIV = styled.div`
  display: flex;
  justify-content: center;
`;
export const DIVColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex-direction: column;
`;
export const ButtonAdd = styled.button`
  color: white;
  background-color: cadetblue;
`;
export const ButtonEdit = styled.button`
  color: white;
  padding: 40%;
  background-color: #2baa47;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
export const ButtonDelete = styled.button<{
  color?: string;
  onClick?: Function;
}>`
  color: white;
  padding: 8.5px 25%;
  background-color: #ff3300;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: transform 0.9s;

  :hover {
    transform: scale(1.1);
  }
`;
export const Title = styled.h1`
  text-align: center;
`;

export const Table = styled.div`
  overflow: hidden;
  padding: 16px 10px;
  margin: 10px auto;
  min-width: 290px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  height: auto;
  border-radius: 10px;
`;

export const THead = styled.h3`
  padding: 0 5%;
`;

export const TData = styled.p`
  padding: 0 5%;
`;

export const Container = styled.div`
  display: flex;
`;

export const Input = styled.input`
  align-self: center;
  padding: 15px 6px;
  margin: 12px 0;
  width: 75%;
  outline: 1px #8284ff inset;
  border: none;
  cursor: pointer;
`;

export const Label = styled.p`
  font-weight: bold;
  margin-left: 11%;
`;

export const Select = styled.select`
  font-weight: bold;
  margin-left: 11%;
  width: 78%;
  padding: 2% 0;
`;
