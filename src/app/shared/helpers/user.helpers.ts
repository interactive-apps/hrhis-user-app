
export function sanitizeNewUserinfo(userInfo) {
    const sanitizedUserInfo = {
        firstName: userInfo.firstName ? userInfo.firstName : '',
	    surname: userInfo.username ? userInfo.surname : '',
	    email: userInfo.email ? userInfo.email : '',
        username: userInfo.username ? userInfo.username : '',
        password: userInfo.password ? userInfo.password : '',
        userAuthorities: userInfo.userAuthorities ? userInfo.userAuthorities : []
    };
    return sanitizedUserInfo;
}

export function sanitizeExistingUserinfo(userInfo) {
    const sanitizedUserInfo = {
        id: userInfo.id ? userInfo.id : '',
        firstName: userInfo.firstName ? userInfo.firstName : '',
	    surname: userInfo.username ? userInfo.surname : '',
	    email: userInfo.email ? userInfo.email : '',
        username: userInfo.username ? userInfo.username : '',
        password: userInfo.password ? userInfo.password : '',
        userAuthorities: userInfo.userAuthorities ? userInfo.userAuthorities : []
    };
    return sanitizedUserInfo;
}
