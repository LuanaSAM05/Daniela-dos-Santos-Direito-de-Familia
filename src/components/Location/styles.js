import styled from "styled-components";

export const LocationSection = styled.section`
  padding: 80px 24px;
  background-color: #FFFFFF;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const LocationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(11, 25, 44, 0.04);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0B192C, #C5A880, #0B192C);
  }

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

export const LocationIconBox = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #0B192C;
  color: #C5A880;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(11, 25, 44, 0.2);
`;

export const LocationTitle = styled.h2`
  font-size: 32px;
  color: #0B192C;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const LocationText = styled.p`
  font-size: 17px;
  color: #475569;
  max-width: 620px;
  line-height: 1.6;
  margin-bottom: 28px;

  strong {
    color: #0B192C;
  }
`;

export const RegionBadgeContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RegionBadge = styled.span`
  background-color: #FFFFFF;
  border: 1px solid #CBD5E1;
  color: #334155;
  font-size: 13.5px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: #C5A880;
  }
`;
