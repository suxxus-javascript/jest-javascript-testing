const getUserId = url => {
    const userIdPattern = /user\/(\d+)/;

    return !url.match(userIdPattern) ? -1 : parseInt(url.match(userIdPattern)[1], 10);
};

module.exports = function isomorphicFetch(url) {
    const userId = getUserId(url);

    if (userId > 0) {
        return Promise.resolve({ json: () => ({ name: 'John' }) });
    }
    return Promise.reject(new Error('fail'));
};
