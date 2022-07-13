/**
 * 异常放行记录
 */
 import React, { useState, useEffect } from 'react';
 import { Space } from 'antd';
 import Condition from "../../components/TableCondition/report";
 import Table from "../../components/Table";
 import { releaseRecordsHeader } from "../../components/TableData";
 import styer from './index.less';
 const ReleaseRecords = () => {
     const [height, setHeight] = useState('calc(100vh - 100px)');//table 最大高度
     const [pagination, setPagination] = useState({
         total: 0,
         pageSize: 20,
         currentPage: 1
     });//table 最大高度
     const [data, setData] = useState([{ name: 'as' }]);
     const tablePage = (currentPage, pageSize) => {
         setPagination({ currentPage: currentPage, pageSize: pageSize });
     }
     return (
         <div className={styer.class}>
             <div className={'condition'}>
                 <Condition
                     onlyId="releaseRecords"
                     onSearch={() => {
 
                     }}
                     onExport={() => {
 
                     }}
                 />
             </div>
             <div className={styer.content}>
                 <Table
                     data={data}
                     onlyId='releaseRecords'
                     columns={releaseRecordsHeader}
                     page={pagination}
                     rowKey={(record) => 0}
                     height={height}
                     onPage={tablePage} />
             </div>
 
         </div>
     )
 };
 
 export default ReleaseRecords;