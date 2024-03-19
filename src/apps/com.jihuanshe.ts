import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jihuanshe',
  name: '集换社',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击【跳过】',
      quickFind: true,
      rules: '@View <2 FrameLayout <2 FrameLayout < [vid="adContainer"]',
      snapshotUrls: 'https://i.gkd.li/i/14303879',
    },
  ],
});
