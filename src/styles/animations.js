import { keyframes, css } from "styled-components";

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-28px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(28px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const reveal = (animation = fadeUp, delay = 0) => css`
  opacity: 0;

  .is-visible & {
    animation: ${animation} 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
    animation-delay: ${delay}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;

    .is-visible & {
      animation: none;
    }
  }
`;