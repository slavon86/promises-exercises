/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.then(r => {
      return transformer(r);
    }).catch(e => {
      throw e;
    }).then(value => {
      resolve(value);
    }).catch(err => {
      reject(err);
    });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(r => {
      return new Promise((resolve, reject) => {
        if (typeof r === 'number') {
          resolve (r * r);
        }
        if (typeof r === 'string') {
          const parsed = Number.parseInt(r, 10);
          if (Number.isNaN(parsed)) {
            reject('Cannot convert \'' + r + '\' to a number!');
          } else {
            resolve (parsed * parsed);
          }
        }
      });
    })
    .catch(e => {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(e => {
      return new Promise((resolve, reject) => {
        resolve(0);
      });
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise
    .then( value => {
      return new Promise((resolve, reject) => {
        reject(value);
      });
    },
    err => {
      return new Promise((resolve, reject) => {
        resolve(err);
      });
    });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};