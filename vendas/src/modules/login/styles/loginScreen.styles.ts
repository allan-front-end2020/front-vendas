import styled from 'styled-components';

import { Space, Typography } from 'antd';

const { Title } = Typography;

export const ContainerLoginAll = styled.div`
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
`;
export const LogoImg = styled.img`
  width: 246px;
  height: 106px;
  margin-bottom: 9%;
`;
export const TitleLogin = styled(Title)``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: #f2f2f2;
  width: 100%;
  max-width: 473px;
  margin-right: -38px;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
`;
export const LimetedContainer = styled.div`
  padding: 74px;
  width: 100%;
  max-width: 478px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
