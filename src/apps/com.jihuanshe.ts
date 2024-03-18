import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jihuanshe',
  name: '集换社',
  groups: [
    {
      name: '开屏广告',
      desc: '点击【跳过】',
      key: 0,
      rules: [
        {
          matches: [
            '[id="com.jihuanshe:id/adContainer"] > FrameLayout > FrameLayout > View',
          ],
          snapshotUrls: ['https://i.gkd.li/i/14303879'],
          exampleUrls: [
            'https://m.gkd.li/81077248/524e518e-7b7e-4ef3-934b-427feefaa185',
          ],
          activityIds: ['com.jihuanshe.ui.page.SplashActivity'],
        },
      ],
    },
  ],
});
