
export function sanitizeNewUserinfo(userInfo) {
    const sanitizedUserInfo = {
        firstname: userInfo.firstname ? userInfo.firstname : '',
	    surname: userInfo.username ? userInfo.surname : '',
	    email: userInfo.email ? userInfo.email : '',
        username: userInfo.username ? userInfo.username : '',
        password: userInfo.password ? userInfo.password : '',
        role: userInfo.role ? userInfo.role : []
    };
    return sanitizedUserInfo;
}

export function sanitizeExistingUserinfo(userInfo) {
    const sanitizedUserInfo = {
        uid: userInfo.id ? userInfo.id : '',
        firstname: userInfo.firstname ? userInfo.firstname : '',
	    surname: userInfo.username ? userInfo.surname : '',
	    email: userInfo.email ? userInfo.email : '',
        username: userInfo.username ? userInfo.username : '',
        password: userInfo.password ? userInfo.password : '',
        role: userInfo.role ? userInfo.role : []
    };
    return sanitizedUserInfo;
}
