import styled from "styled-components";

export const DIV = styled.div`
  display: flex;
  justify-content: center;
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
export const ButtonDelete = styled.button`
  color: white;
  padding: 25%;
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
  background: white;
  height: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0.2);
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

export const AddForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 15px 6px;
  margin: 12px 0;
  width: 100%;
  outline: 1px #8284ff inset;
  border: none;
  cursor: pointer;
`;
