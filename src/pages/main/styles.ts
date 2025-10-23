import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  width: 100vw;
  background: rgba(109, 62, 174, 1);
  position: relative;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 48px;
  width: 1200px;
  max-width: 1200px;
  align-items: center;
  z-index: 11;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;
export const ImagesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const IllustrationContainer = styled.div`
  width: 700px;
  height: 490px;
`;

export const TextContainer = styled.div`
  display: flex;
  heigth: 100%;
  gap: 40px;
  justify-content: center;
  flex-direction: column;
`;
export const Heading = styled.h1`
  color: ${colors.white};
  font-size: 40px;
  line-height: 125%;
  font-weight: 600;
  letter-spacing: 0px;
`;
export const Text = styled.p`
  color: ${colors.white};
  font-size: 14px;
  line-height: 150%;
  font-weight: 300;
  letter-spacing: 0px;
`;
export const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;
export const Button = styled.button`
  border-radius: 28px;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  cursor: pointer;
  width: 200px;
  z-index: 11;
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 300;
  line-height: 150%;
  color: ${colors.secondary03};
  background-color: ${colors.white};
  &:hover {
    background-color: ${colors.secondary04};
    color: ${colors.white};
  }
`;

export const Footer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  right: 100px;
  justify-content: flex-end;
  bottom: 20px;
  gap: 16px;
`;
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1.5px solid ${colors.secondary04};
  }
`;
