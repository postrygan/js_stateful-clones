'use strict';

// /**
//  * @param {Object} state
//  * @param {Object[]} actions
//  *
//  * @return {Object[]}
//  */

function transformStateWithClones(state, actions) {
  const cloneState = { ...state };

  const array = [];

  for (const object of actions) {
    if (object.type === 'addProperties') {
      Object.assign(cloneState, object.extraData);

      array.push({ ...cloneState });
    } else if (object.type === 'removeProperties') {
      for (const keys of object.keysToRemove) {
        delete cloneState[keys];
      }

      array.push({ ...cloneState });
    } else {
      for (const key in cloneState) {
        delete cloneState[key];
      }

      array.push({ ...cloneState });
    }
  }

  return array;
}

module.exports = transformStateWithClones;
