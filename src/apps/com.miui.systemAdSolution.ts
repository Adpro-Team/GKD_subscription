import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      name: '开屏广告',
      desc: '点击【跳过广告】',
      key: 0,
      rules: [
        {
          matches: ['[id="com.miui.systemAdSolution:id/view_skip_button"]'],
          quickFind: true,
          snapshotUrls: ['https://i.gkd.li/i/14580266'],
          exampleUrls: [
            'https://m.gkd.li/81077248/c3d69e13-c48c-4ab2-95c8-9e0223c29505',
          ],
        },
      ],
    },
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13227328', // com.android.thememanager.module.detail.view.ThemeDetailActivity
        'https://i.gkd.li/i/13255751', // com.android.thememanager.ThemeResourceProxyTabActivity
      ],
    },
  ],
});
