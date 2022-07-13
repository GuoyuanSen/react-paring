import React, { useState } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import quanping from '../../../public/img/quanping.png';
import tuichu from '../../../public/img/tuichu.png';
const FullScreen = (props) => {
  const [isFull, setIsFull] = useState(
    Math.abs(window.screen.height - window.document.documentElement.clientHeight) <= 17,
  );
  window.onresize = function () {
    setIsFull(Math.abs(window.screen.height - window.document.documentElement.clientHeight) <= 17);
  };

  // 阻止F11键默认事件，用HTML5全屏API代替
  window.addEventListener('keydown', function (e) {
    e = e || window.event;
    if (e.keyCode === 122 && !isFull) {
      e.preventDefault();
      enterFullScreen();
    }
  });

  // 打开浏览器全屏模式

  const enterFullScreen = () => {
    let el = document.documentElement;
    let rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;
    if (rfs) {
      // typeof rfs != "undefined" && rfs
      rfs.call(el);
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
      let wscript = new ActiveXObject('WScript.Shell');
      if (wscript != null) {
        wscript.SendKeys('{F11}');
      }
    }
    props.onChange(true);
  };

  // 退出全屏
  const exitFullScreen = () => {
    let el = document;
    let cfs =
      el.cancelFullScreen ||
      el.mozCancelFullScreen ||
      el.msExitFullscreen ||
      el.webkitExitFullscreen ||
      el.exitFullscreen;
    if (cfs) {
      // typeof cfs != "undefined" && cfs
      cfs.call(el);
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // for IE，这里和fullScreen相同，模拟按下F11键退出全屏
      let wscript = new ActiveXObject('WScript.Shell');
      if (wscript != null) {
        wscript.SendKeys('{F11}');
      }
    }
    props.onChange(false);
  };
  return (
    <>
      {!isFull && (
        <span onClick={enterFullScreen} style={{ cursor: 'pointer' }}>
          {/* <FullscreenOutlined
            onClick={enterFullScreen}
            style={{ fontSize: '18px', color: '#08c' }}
          /> */}
          <img style={{ width: 20, height: 20, marginTop: -4 }} src={quanping} alt="" />{' '}
          <span>全屏</span>
        </span>
      )}
      {isFull && (
        <span onClick={exitFullScreen} style={{ cursor: 'pointer' }}>
          {/* <FullscreenExitOutlined
            
            style={{ fontSize: '18px', color: '#08c' }}
          /> */}
          <img src={tuichu} style={{ width: 20, height: 20, marginTop: -4 }} alt="" />{' '}
          <span>退出</span>
          {isFull}
        </span>
      )}
    </>
  );
};

export default FullScreen;
