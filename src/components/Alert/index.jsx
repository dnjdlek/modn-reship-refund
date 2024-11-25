import { useEffect } from 'react';
import React from 'react';
import { Wrapper } from './styled';
import { alertAtom } from '../../recoil/global';
import { useRecoilState } from 'recoil';

const Alert = () => {
  const [onAlert, setAlert] = useRecoilState(alertAtom);
  const onClose = () => {
    // console.log(onAlert, 'adsfs');
    setAlert({});
  };
  useEffect(() => {
    // console.log(onAlert, 'dfasdf');
  }, [onAlert]);

  return (
    <Wrapper active={Object.keys(onAlert).length !== 0}>
      <div
        className="overlay"
        onClick={
          onAlert.isForce
            ? () => {
                onAlert.event;
                onClose;
              }
            : onClose
        }
      />
      <div className="container">
        <p>알림</p>
        <span
          dangerouslySetInnerHTML={{ __html: onAlert ? onAlert.title : '' }}
        />
        <div className="flex">
          {onAlert ? (
            onAlert.event && !onAlert.isForce ? (
              <p className="btn" onClick={onClose}>
                취소
              </p>
            ) : (
              ''
            )
          ) : (
            ''
          )}
          <p
            className="btn"
            onClick={
              onAlert
                ? onAlert.event
                  ? () => {
                      onAlert.event();
                      onClose();
                    }
                  : onClose
                : ''
            }
          >
            {onAlert ? (onAlert.btnTitle ? onAlert.btnTitle : '확인') : ''}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Alert;
