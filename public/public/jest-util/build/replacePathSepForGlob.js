'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = replacePathSepForGlob;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function replacePathSepForGlob(path) {
  return path.replace(/\\(?![{}()+?.^$])/g, '/');
}
