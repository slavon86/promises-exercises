/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return promise.then(transformer);
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
      if (typeof r === 'number') {
        return (r * r);
      }
      if (typeof r === 'string') {
        const parsed = Number.parseInt(r, 10);
        if (Number.isNaN(parsed)) {
          throw 'Cannot convert \'' + r + '\' to a number!';
        } else {
          return (parsed * parsed);
        }
      }
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {return 0;});
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
      throw value; 
    },
    err => {
      return err;
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