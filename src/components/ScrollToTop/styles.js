import styled from "styled-components";

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #0B192C;
  color: #C5A880;
  border: 1.5px solid #C5A880;
  display: ${(props) => (props.$visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  z-index: 998;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #C5A880 0%, #B38E5D 100%);
    color: #0B192C;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(197, 168, 128, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 84px;
    right: 20px;
    width: 44px;
    height: 44px;
    font-size: 16px;
  }
`;
