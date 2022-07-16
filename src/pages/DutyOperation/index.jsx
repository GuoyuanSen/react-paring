/**
 * 当班统计 
 */
import React, { useState, useEffect } from 'react';
import stycr from './index.less';
import { Space } from 'antd';
import Condition from "../../components/TableCondition/report";
import Table from "../../components/Table";
import { classReportHeader } from "../../components/TableData";
const ClassReport = () => {
    const [height, setHeight] = useState('calc(100vh - 100px)');//table 最大高度
    const [pagination, setPagination] = useState({
        total: 0,
        pageSize: 20,
        currentPage: 1
    });//table 最大高度
    const [data, setData] = useState([{ name: 'as' }]);
    const caozuo = [
        {
            title: '操作',
            key: '12',
            width: 140,
            align: 'center',
            ellipsis: {
                showTitle: false,
            },
            render: (record) => (
                <Space>
                    <a onClick={() => { }} >
                        详情
                    </a>

                </Space>
            )
        }
    ];
    const newTableHearder = classReportHeader.concat(caozuo);
    const tablePage = (currentPage, pageSize) => {
        setPagination({ currentPage: currentPage, pageSize: pageSize });
    }
    return (
        <div className={stycr.class}>
            <div className={'condition'}>
                <Condition
                    onlyId="class"
                    onSearch={() => {

                    }}
                    onExport={() => {

                    }}
                />
            </div>
            <div className={stycr.content}>
            <Table
                    data={data}
                    onlyId='class'
                    columns={newTableHearder}
                    page={pagination}
                    height={height}
                    onPage={tablePage} />
            </div>

        </div>
    )
};

export default ClassReport;