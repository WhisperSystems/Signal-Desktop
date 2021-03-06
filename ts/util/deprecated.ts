// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { getEnvironment, Environment } from '../environment';
import * as log from '../logging/log';

export function deprecated(message?: string): void {
  if (getEnvironment() === Environment.Development) {
    log.error(new Error(`This method is deprecated: ${message}`));
  }
}
