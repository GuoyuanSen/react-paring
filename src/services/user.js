import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}

/** 获取趋势数据 POST /api/welcome/revenueTrendContainer */
export async function revenueTrendContainer() {
  // return request('/api/welcome/revenueTrendContainer', {
  //   method: 'POST',
  //   ...(options || {}),
  // });
  return request('/api/welcome/revenueTrendContainer');
}
