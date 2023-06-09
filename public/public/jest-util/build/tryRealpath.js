'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = tryRealpath;

function _gracefulFs() {
  const data = require('graceful-fs');

  _gracefulFs = function () {
    return data;
  };

  return data;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function tryRealpath(path) {
  try {
    path = _gracefulFs().realpathSync.native(path);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  return path;
}
