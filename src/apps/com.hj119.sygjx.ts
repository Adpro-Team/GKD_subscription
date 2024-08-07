import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hj119.sygjx',
  name: '实用工具箱',
  groups: [
    {
      key: 2,
      name: '广告弹窗',
      fastQuery: true,
      rules:
        '@ImageView < FrameLayout +2 FrameLayout[childCount=2] > FrameLayout > TextView[text="立即下载"]',
      snapshotUrls: 'https://i.gkd.li/i/13226595',
    },
  ],
});
