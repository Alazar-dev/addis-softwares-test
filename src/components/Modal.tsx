import React from "react";
import styled, { css } from "styled-components";

const Modal = styled.div`
  z-index: auto;
  position: fixed;
  top: ${({ show }: { show: boolean }) => (show ? "0px" : "-1000px")};
  height: 100%;
  width: 100%;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalContainer = styled.div<{ flat?: boolean }>`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${() =>
    css`
      width: calc(100% - 64px);
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.87);
      background-color: #fff;
    `}
`;

export const ModalDialogue: React.FC<{
  flat?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, children, setOpen, flat }) => {
  return (
    <div onClick={() => setOpen(false)}>
      <Modal show={open}>
        <ModalContainer flat={flat} onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ModalDialogue;
