import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wls.weex',
  name: '我联智慧用电',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      exampleUrls:
        'https://m.gkd.li/57941037/74525817-4bc5-4a06-9bda-d5de97e2e91b',
      snapshotUrls: 'https://i.gkd.li/import/14122524',
    },
  ],
});
