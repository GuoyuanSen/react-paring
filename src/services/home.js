import request from '@/utils/request';

/** 获取趋势数据 POST /api/welcome/revenueTrendContainer */
export async function revenueTrendContainer() {
  return request('/api/home/revenueTrendContainer', {
    method: 'POST',
  });
  //   return request('/api/home/revenueTrendContainer');
}
