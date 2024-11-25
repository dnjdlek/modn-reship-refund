import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 58px;

  img {
    position: absolute;
    width: 102px;
    height: 19.881px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${(props) => props.theme.mobile} {
  }
`;

export const MainHeader = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 58px;
  padding: 0 20px;
  z-index: 30;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.03);

  @media ${(props) => props.theme.mobile} {
  }
`;
