// Copyright 2018-2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

/* global $: false */
/* global Whisper: false */

$(document).on('keydown', e => {
  if (e.keyCode === 27) {
    window.closeDebugLog();
  }
});

const $body = $(document.body);

async function applyTheme() {
  const theme = await window.getThemeSetting();
  $body.removeClass('light-theme');
  $body.removeClass('dark-theme');
  $body.addClass(`${theme === 'system' ? window.systemTheme : theme}-theme`);
}

applyTheme();

window.subscribeToSystemThemeChange(() => {
  applyTheme();
});

// got.js appears to need this to successfully submit debug logs to the cloud
window.setImmediate = window.nodeSetImmediate;

window.view = new Whisper.DebugLogView();
window.view.$el.appendTo($body);
