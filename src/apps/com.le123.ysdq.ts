import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.le123.ysdq',
  name: '影视大全',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.elinkway.infinitemovies.ui.activity.NewMainActivity',
          fastQuery: true,
          matches: '[id="com.le123.ysdq:id/ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13635244',
        },
      ],
    },
  ],
});
