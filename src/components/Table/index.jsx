import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Table } from 'antd';
const TableList = (props) => {
    const { columns, data, height, pageInfo } = props
    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ y: height }}
            pagination={{
                showTotal: (total) => `共 ${total} 条数据`,
                hideOnSinglePage: true,
                showSizeChanger: false,
                pageSize: pageInfo?.pageSize,
                total: pageInfo?.total || 0,
                current: pageInfo?.currentPage,
                onChange: (currentPage, pageSize) => {
                    props.onPage(currentPage, pageSize)
                },
            }}
        />
    )
};

export default TableList;
