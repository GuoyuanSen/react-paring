import React from 'react';
import styles from './index.less';
import { connect } from 'umi';
import logo from '@/assets/image/logo_suyike.png';
const GlobalHeaderLeftTop = () => {
    return (
        <div className={styles.userinfo}>
            <div className={styles.logo}>
                <img alt="logo" className={styles.ulogoimg} src={logo} />
            </div>
        </div>
    )
}

export default connect(() => ({

}))(GlobalHeaderLeftTop);