/**
 * 异常统计
 */
import React, { useState, useEffect } from 'react';
import Condition from "../../components/TableCondition/report";
import Table from "../../components/Table";
import { Row, Col } from 'antd';
import { classReportInfoHeader } from "../../components/TableData";
import styer from './index.less';
const ExceptionReport = () => {
    const [height, setHeight] = useState('calc(100vh - 100px)');//table 最大高度
    const [pagination, setPagination] = useState({
        total: 0,
        pageSize: 20,
        currentPage: 1
    });
    const [data, setData] = useState([{ name: 'as' }]);
    const tablePage = (currentPage, pageSize) => {
        setPagination({ currentPage: currentPage, pageSize: pageSize });
    }
    return (
        <div className={styer.class}>
            <div className={'condition'}>
                <Condition
                    onlyId="classInfo"
                    onSearch={() => {

                    }}
                    onExport={() => {

                    }}
                />
            </div>
            <div className={styer.alllabel}>
                <Row>
                    <Col span={4} style={{
                        borderRight:'1px solid #eee'
                    }}>
                        <div className={styer.label}>当班人</div>
                        <div className={styer.labeltxt}>李一</div>
                    </Col>
                    <Col span={20}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={5}>
                                <div >总呼叫数量</div>
                                <div className={styer.labelnum}>163</div>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <div >总处理数量</div>
                                <div className={styer.labelnum} >163</div>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <div >转移接听数量</div>
                                <div className={styer.labelnum} >163</div>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <div >主动呼叫数量</div>
                                <div className={styer.labelnum} >163</div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div >相机事件处理数量</div>
                                <div className={styer.labelnum}>163</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className={styer.content}>
                <Table
                    data={data}
                    onlyId='classInfo'
                    columns={classReportInfoHeader}
                    page={pagination}
                    height={height}
                    onPage={tablePage} />
            </div>

        </div>
    )
};

export default ExceptionReport;