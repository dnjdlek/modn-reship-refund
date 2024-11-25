import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 205px;
  margin: 0 auto; */
  position: relative;
  /* margin-top: 60px;
  margin-bottom: 100px; */
  display: inline-block;
  left: 50%;
  transform: translateX(-50%) !important;

  .pagenum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gap {
      padding: 0 13px;
    }
    .page-number {
      padding: 0 13px;
      ul {
        display: flex;
        /* gap: 27px; */
        li {
          font-weight: 600;
          padding: 0 13px;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.03em;
          cursor: pointer;
          a {
            width: 14px;
            display: block;
            text-align: center;

            &.active {
              border-bottom: 1px solid #7c5aff;
              color: #7c5aff;
            }
          }
        }
      }
    }
  }

  .button {
    width: 7px;
    height: 13px;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer !important;
    transition: 0.4s;
    :hover {
      opacity: 0.6;
    }
  }
  .disable {
    /* border: 1px solid #dfdfdf; */
    /* cursor: default !important; */
    :hover {
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.mobile} {
    transform: scale(0.9, 0.9);
    /* margin-top: 30px; */
    margin-bottom: 50px;
  }
`;

export const Prev = styled.div`
  /* left: 40px;
  border: 1px solid #484848; */
  background-image: url(/images/page-arrow.svg);
  background-position: center;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const Next = styled.div`
  /* right: 40px;
  border: 1px solid #484848; */
  background-image: url(/images/page-arrow.svg);
  background-position: center;
  cursor: pointer;
`;

export const Bar = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 2px;
  background: #dfdfdf;
  border-radius: 10px;
  :after {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${(props) => (props.barWidth ? props.barWidth + '%' : '100%')};
    height: 2px;
    background: #969696;
    border-radius: 10px;
  }
`;

export const PageNum = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  text-align: center;
  font-size: 11px;
  line-height: 16px;
  color: #111;
  div {
    width: 20px;
  }
`;
