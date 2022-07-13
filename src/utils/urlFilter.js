export const newUrl = (url) => {
    let $url = '';
    switch (url) {
        case '/auth/login':
        case '/auth/code':
        case '/other/company/list':
        case '/other/company':
        case '/other/company/status':
        case '/other/company/desKey':
        case '/other/company/saltMd5Key':
        case '/role':
        case '/role/status':
        case '/role/list':
        case '/role/page':
        case '/account':
        case '/account/page':
        case '/account/status':
        case '/account/resetPwd':
            $url = '/cscapi/scsonic-csc-auth' + url;
            // $url = '/api/scsonic-csc-auth' + url;
            break;
        default:
            $url = $url;
            break;
    }
    return $url;
}