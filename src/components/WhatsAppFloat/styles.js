import styled from "styled-components";

export const FloatButton = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  z-index: 999;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 52px;
    height: 52px;
    font-size: 26px;
  }
`;
