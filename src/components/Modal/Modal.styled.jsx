import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: ${props => props.theme.space[2]}px;

  max-width: calc(100vw - 48px);
  min-height: calc(100vh - 24px);
  width: 65vw;
  height: 650px;

  background-color: ${props => props.theme.colors.background};

  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: ${props => props.theme.space[4]}px;
  width: auto;

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(5.5px);

  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
