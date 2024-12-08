import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bz.yilianlife.sd',
  name: '深(新)度搜索',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手SDK-1',
          activityIds: 'com.deep.search.MainActivity',
          matches:
            '@ImageView[clickable=true] <3 ViewGroup -2 ViewGroup >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13766176',
        },
        {
          key: 1,
          name: '快手SDK-2',
          matches: '@ImageView <<n ViewGroup +2 ViewGroup >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14142578',
        },
        {
          key: 2,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[id="ad_area"] >2 [id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/18050212',
        },
      ],
    },
  ],
});
