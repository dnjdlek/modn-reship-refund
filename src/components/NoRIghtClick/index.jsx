import React, { useEffect } from 'react';
import { alertAtom } from '../../recoil/global';
import { useSetRecoilState } from 'recoil';

const NoRightClick = () => {
  const Alert = useSetRecoilState(alertAtom);

  const handleContextMenu = (event) => {
    Alert({
      title: '우클릭 금지!',
    });
    event.preventDefault(); // 우클릭 이벤트의 기본 동작을 막습니다.
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트를 추가합니다.
    document.addEventListener('contextmenu', handleContextMenu);
    // 컴포넌트가 언마운트될 때 이벤트를 제거합니다.
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 합니다.

  return <div></div>;
};

export default NoRightClick;
