import { Tooltip } from 'antd';
const sislesetColumns = [
    {
        title: '设备品牌',
        dataIndex: 'date',
        align: 'center',
        key: '1',
    }, {
        title: '设备序列号',
        dataIndex: 'date',
        align: 'center',
        key: '2',
    }, {
        title: '设备类型',
        dataIndex: 'date',
        align: 'center',
        key: '3',
    }, {
        title: '绑定时间',
        dataIndex: 'date',
        align: 'center',
        key: '4',
    }, {
        title: '操作人',
        dataIndex: 'date',
        align: 'center',
        key: '5',
    }
]

const companyColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        width: '80px',
        align: 'center',
        key: '1',
        render: (text, record, index) => {
            let idx = index + 1;
            console.log(idx)
            return idx;
        },
    }, {
        title: '公司名称',
        dataIndex: 'companyName',
        width: '100px',
        align: 'center',
        key: '2',
    }, {
        title: '联系人',
        width: '100px',
        dataIndex: 'companyUser',
        align: 'center',
        key: '3',
    }, {
        title: '联系电话',
        dataIndex: 'companyUserPhone',
        align: 'center',
        width: '120px',
        key: '4',
    }, {
        title: 'DeskKey',
        dataIndex: 'desKey',
        align: 'center',
        key: '5',
        ellipsis: {
            showTitle: false,
        },
        render: (desKey) => (
            <Tooltip placement="topLeft" title={desKey}>
                {desKey}
            </Tooltip>
        )
    }, {
        title: 'SaltMd5Key',
        dataIndex: 'saltMd5Key',
        align: 'center',
        key: '6',
        ellipsis: {
            showTitle: false,
        },
        render: (saltMd5Key) => (
            <Tooltip placement="topLeft" title={saltMd5Key}>
                {saltMd5Key}
            </Tooltip>
        )
    }
]


const roleColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        width: '80px',
        key: '1',
        render: (text, record, index) => {
            let idx = index + 1;
            console.log(idx)
            return idx;
        },
    }, {
        title: '角色名称',
        dataIndex: 'roleName',
        align: 'center',
        key: '2',
    }, {
        title: '账号绑定数量',
        dataIndex: '',
        align: 'center',
        key: '3',
    }, {
        title: '创建时间',
        dataIndex: 'createDate',
        align: 'center',
        key: '4',
    }, {
        title: '创建人',
        dataIndex: 'createBy',
        align: 'center',
        key: '5',
    }, {
        title: '修改时间',
        dataIndex: 'updateDate',
        align: 'center',
        key: '6',
    }, {
        title: '修改人',
        dataIndex: 'updateBy',
        align: 'center',
        key: '7',
    }
]
const accountColumns = [{
    title: '序号',
    dataIndex: 'date',
    align: 'center',
    width: '80px',
    key: '1',
    render: (text, record, index) => {
        let idx = index + 1;
        console.log(idx)
        return idx;
    },
}, {
    title: '用户名',
    dataIndex: 'loginName',
    align: 'center',
    key: '2',
}, {
    title: '角色',
    dataIndex: 'roleVO',
    align: 'center',
    key: '4', 
    render: (text, record, index) => {
        return text?.roleName||'-';
    },
}, {
    title: '登录IP',
    dataIndex: 'lastLoginIp',
    align: 'center',
    key: '5',
}, {
    title: '登录时间',
    dataIndex: 'lastLoginTime',
    align: 'center',
    key: '6',
}, {
    title: '创建时间',
    dataIndex: 'createDate',
    align: 'center',
    key: '7',
}, {
    title: '创建人',
    dataIndex: 'createBy',
    align: 'center',
    key: '8',
}, {
    title: '修改时间',
    dataIndex: 'updateDate',
    align: 'center',
    key: '9',
}, {
    title: '修改人',
    dataIndex: 'updateBy',
    align: 'center',
    key: '10',
}]


const exceptionReportColumns = [{
    title: '停车场名称',
    dataIndex: 'date',
    align: 'center',
    key: '1',
}, {
    title: '统计开始时间',
    dataIndex: 'date',
    align: 'center',
    key: '2',
}, {
    title: '统计结束时间',
    dataIndex: 'date',
    align: 'center',
    key: '3',
}, {
    title: '异常分类',
    align: 'center',
    key: '4',
    children: [
        {
            title: '异常入场',
            align: 'center',
            key: '5',
            dataIndex: 'monthPayedAmount'
        },
        {
            title: '出场呼叫',
            align: 'center',
            key: '6',
            dataIndex: 'monthPayedAmount'
        },
        {
            title: '支付异常',
            align: 'center',
            key: '7',
            dataIndex: 'monthPayedAmount'
        },
        {
            title: '免费放行',
            align: 'center',
            key: '8',
            dataIndex: 'monthPayedAmount'
        },
        {
            title: '系统或网络故障',
            align: 'center',
            key: '9',
            dataIndex: 'monthPayedAmount'
        }
    ]
}, {
    title: '合计',
    dataIndex: 'date',
    align: 'center',
    key: '10',
}]

const exceptionInfoReportColumns = [
    {
        title: '序号',
        dataIndex: 'date',
        align: 'center',
        key: '1',
    },
    {
        title: '停车场名称',
        dataIndex: 'date',
        align: 'center',
        key: '2',
    },
    {
        title: '发生位置',
        dataIndex: 'date',
        align: 'center',
        key: '3',
    },
    {
        title: '异常分类',
        dataIndex: 'date',
        align: 'center',
        key: '4',
    },
    {
        title: '异常发生时间',
        dataIndex: 'date',
        align: 'center',
        key: '5',
    },
    {
        title: '异常原因',
        dataIndex: 'date',
        align: 'center',
        key: '6',
    },
    {
        title: '车牌号码',
        dataIndex: 'date',
        align: 'center',
        key: '7',
    },
    {
        title: '车辆通行类型',
        dataIndex: 'date',
        align: 'center',
        key: '8',
    },
    {
        title: '客服端操作',
        dataIndex: 'date',
        align: 'center',
        key: '9',
    }

]


const classReportColumns = [
    {
        title: '序号',
        dataIndex: 'date',
        align: 'center',
        key: '1',
    },
    {
        title: '客服中心',
        dataIndex: 'date',
        align: 'center',
        key: '2',
    },
    {
        title: '托管停车场数量',
        dataIndex: 'date',
        align: 'center',
        key: '3',
    },
    {
        title: '客服人员',
        dataIndex: 'date',
        align: 'center',
        key: '4',
    },
    {
        title: '当班日期',
        dataIndex: 'date',
        align: 'center',
        key: '5',
    },
    {
        title: '总呼叫数量',
        dataIndex: 'date',
        align: 'center',
        key: '6',
    },
    {
        title: '总处理数量',
        dataIndex: 'date',
        align: 'center',
        key: '7',
    },
    {
        title: '被动接听数量',
        dataIndex: 'date',
        align: 'center',
        key: '8',
    },
    {
        title: '主动呼叫数量',
        dataIndex: 'date',
        align: 'center',
        key: '9',
    },
    {
        title: '接听转移数量',
        dataIndex: 'date',
        align: 'center',
        key: '10',
    }

]


const classReportInfoColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '停车场名称',
        dataIndex: 'key',
        align: 'center',
        key: '2',
    },
    {
        title: '发生位置',
        dataIndex: 'key',
        align: 'center',
        key: '3',
    },
    {
        title: '事件类型',
        dataIndex: 'key',
        align: 'center',
        key: '4',
    },
    {
        title: '操作类型',
        dataIndex: 'key',
        align: 'center',
        key: '5',
    },
    {
        title: '呼叫时间',
        dataIndex: 'key',
        align: 'center',
        key: '6',
    },
    {
        title: '等待时长',
        dataIndex: 'key',
        align: 'center',
        key: '7',
    },
    {
        title: '处理时长',
        dataIndex: 'key',
        align: 'center',
        key: '8',
    },
    {
        title: '呼叫原因',
        dataIndex: 'key',
        align: 'center',
        key: '9',
    },
    {
        title: '车牌号码',
        dataIndex: 'key',
        align: 'center',
        key: '10',
    },
    {
        title: '车辆通行类型',
        dataIndex: 'key',
        align: 'center',
        key: '11',
    },
    {
        title: '客服端操作',
        dataIndex: 'key',
        align: 'center',
        key: '12',
    }
]

const releaseRecordsColumns = [{
    title: '序号',
    align: 'center',
    key: '1',
    render: (text, record, index) => {
        let idx = index + 1;
        console.log(idx)
        return idx;
    },
}, {
    title: '车场名称',
    dataIndex: 'key',
    align: 'center',
    key: '2',
}, {
    title: '异常放行类型',
    dataIndex: 'key',
    align: 'center',
    key: '3',
}, {
    title: '异常发生时间',
    dataIndex: 'key',
    align: 'center',
    key: '4',
}, {
    title: '异常放行原因',
    dataIndex: 'key',
    align: 'center',
    key: '5',
}, {
    title: '车牌号码',
    dataIndex: 'key',
    align: 'center',
    key: '6',
}, {
    title: '操作通道',
    dataIndex: 'key',
    align: 'center',
    key: '7',
}, {
    title: '停车时间',
    dataIndex: 'key',
    align: 'center',
    key: '8',
}, {
    title: '处理人',
    dataIndex: 'key',
    align: 'center',
    key: '9',
}
]

const problemRecordStatisticsColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '停车场名称',
        dataIndex: 'key',
        align: 'center',
        key: '2',
    },
    {
        title: '反馈渠道',
        dataIndex: 'key',
        align: 'center',
        key: '3',
    },
    {
        title: '反馈时间',
        dataIndex: 'key',
        align: 'center',
        key: '4',
    },
    {
        title: '问题描述',
        dataIndex: 'key',
        align: 'center',
        key: '5',
    },
    {
        title: '反馈人',
        dataIndex: 'key',
        align: 'center',
        key: '6',
    },
    {
        title: '联系方式',
        dataIndex: 'key',
        align: 'center',
        key: '7',
    },
    {
        title: '记录人',
        dataIndex: 'key',
        align: 'center',
        key: '8',
    }
]
const anomalousEventStatisticsColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '停车场名称',
        dataIndex: 'key',
        align: 'center',
        key: '2',
    },
    {
        title: '发生位置',
        dataIndex: 'key',
        align: 'center',
        key: '3',
    },
    {
        title: '事件类型',
        dataIndex: 'key',
        align: 'center',
        key: '4',
    },
    {
        title: '操作类型',
        dataIndex: 'key',
        align: 'center',
        key: '5',
    },
    {
        title: '呼叫时间',
        dataIndex: 'key',
        align: 'center',
        key: '6',
    },
    {
        title: '等待时长',
        dataIndex: 'key',
        align: 'center',
        key: '7',
    },
    {
        title: '处理时间',
        dataIndex: 'key',
        align: 'center',
        key: '8',
    },
    {
        title: '呼叫原因',
        dataIndex: 'key',
        align: 'center',
        key: '9',
    },
    {
        title: '车牌号码',
        dataIndex: 'key',
        align: 'center',
        key: '10',
    },
    {
        title: '车辆通行类型',
        dataIndex: 'key',
        align: 'center',
        key: '11',
    },
    {
        title: '处理备注',
        dataIndex: 'key',
        align: 'center',
        key: '12',
    },
    {
        title: '处理人',
        dataIndex: 'key',
        align: 'center',
        key: '13',
    }
];
const servicegroupCompanyColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }, {
        title: '客服中心名称',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }, {
        title: '绑定停车场数量',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '绑定人员数量',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '状态',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }
];
const servicegroupAreaColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }, {
        title: '停车场名称',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }, {
        title: '绑定时间',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '状态',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
];
const servicegroupPeopleColumns = [
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '账号',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '客服姓名',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '联系方式',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    },
    {
        title: '绑定时间',
        dataIndex: 'key',
        align: 'center',
        key: '1',
    }
]
export const sislesetHeader = sislesetColumns; //通道及对讲配置
export const companytHeader = companyColumns; //公司管理
export const roleHeader = roleColumns; //角色管理
export const accountHeader = accountColumns; //角色管理


export const exceptionReportHeader = exceptionReportColumns; //异常事件统计报表
export const exceptionInfoReportHeader = exceptionInfoReportColumns; //异常事件统计详情报表
export const classReportHeader = classReportColumns; //云客服当班统计
export const classReportInfoHeader = classReportInfoColumns; //云客服当班统计详情报表

export const releaseRecordsHeader = releaseRecordsColumns; //异常放行记录

export const problemRecordStatisticsHeader = problemRecordStatisticsColumns; //现场问题记录
export const anomalousEventStatisticsHeader = anomalousEventStatisticsColumns; //异常事件统计

export const servicegroupCompanyHeader = servicegroupCompanyColumns; //客服组设置-客服组信息-公司级
export const servicegroupAreaHeader = servicegroupAreaColumns; //客服组设置-客服组信息-区域级
export const servicegroupPeopleHeader = servicegroupPeopleColumns; //客服组设置-人员信息-区域级