/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer) {
  return promise.then(asyncTransformer);
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(slowAsyncProcess);
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    /* IMPLEMENT ME! */
    return  getUserById(userId).then(userObject => {
      if (typeof userObject === 'undefined') {
        return undefined;          
      }
      return getOrganizationById(userObject.organizationId)
        .then(organisationObject => {
          userObject.organization = organisationObject;
          return userObject;
        }); 
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};