/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

// This file must not use 'use strict'.
// See https://github.com/facebook/jest/pull/2457#issuecomment-269518622

import type {Global} from 'types/Global';

module.exports =
  (global: Global, key: string, value: any) => global[key] = value;
