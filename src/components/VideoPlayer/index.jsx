import React, { Component } from "react";
import PropTypes from "prop-types";

import Videojs from "video.js";

// 添加hls插件，以保证播放m3u8格式的视频
import "videojs-contrib-hls";
// 导入videojs 的样式
import "video.js/dist/video-js.css";
// 自定义样式（见下文）
import "./style.css";

// 给window上添加videojs, zh-CN.js 语言注册依赖 videojs.addLanguage()方法
// 配置了不生效的话  把public/index.html  里的标签  <html lang="en">  </html>   lang设置为 "zh-CN"
window.videojs = Videojs;
import("video.js/dist/lang/zh-CN.js");

class VideoPlayer extends Component {
  static propTypes = {
    // 视频地址
    src: PropTypes.string,
    // 视频高度
    height: PropTypes.string,
    // 视频宽度
    width: PropTypes.string
  };

  // 默认的props
  static defaultProps = {
    src: "",
    height: 'auto',
    width: 'auto'
  };

  state = {
    videoId: "custom-video" + +new Date()
  };

  // 初始化内容
  componentDidMount() {
       this.initVideo(this.props.src);
  }

  componentWillUnmount() {
    // 销毁播放器
    if (this.player) {
      this.player.dispose();
    }
  }

  // 初始化
  initVideo(src) {
    const { videoId } = this.state;
    const { height, width } = this.props;
    console.log()
    this.player = Videojs(videoId, {
      // height,
      // width,
      autoplay:true,
      controls: true,
      preload: "auto",
    });
    this.player.src({ src });
  }
  render() {
    const { videoId } = this.state;
    return (
      <div
        className="custom-video-warpper"
        style={{
          display: this.props.src ? "block" : "none"
        }}
      >
        {/* video标签的className一定要是 "video-js",否则样式不生效 */}
        <video id={videoId} className="video-js" />
      </div>
    );
  }
}

export default VideoPlayer;