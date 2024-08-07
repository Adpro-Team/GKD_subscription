import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'world.letsgo.booster.android.pro',
  name: '快连VPN',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="close_update_tip"]',
      snapshotUrls: 'https://i.gkd.li/i/14066056',
    },
    {
      key: 2,
      name: '功能类-免费会员弹窗',
      desc: '点击【快快收下】',
      fastQuery: true,
      activityIds: 'world.letsgo.booster.android.pages.home.HomeActivity',
      rules: '[text="快快收下"]',
      snapshotUrls: 'https://i.gkd.li/i/14072381',
    },
  ],
});
