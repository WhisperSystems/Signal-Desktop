// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { clipboard, nativeImage } from 'electron';

export function copyText(text: string): void {
  clipboard.writeText(text);
}

export function copyImage(path: string): void {
  const absolutePath = window.Signal.Migrations.getAbsoluteAttachmentPath(path);
  if (!absolutePath) {
    return;
  }

  clipboard.writeImage(nativeImage.createFromPath(absolutePath));
}
