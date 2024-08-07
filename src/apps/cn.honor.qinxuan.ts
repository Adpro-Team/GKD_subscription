import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '全屏广告-首页广告弹窗',
      desc: '点击X',
      rules: [
        {
          matches: '[id="cn.honor.qinxuan:id/iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/i/13930613',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[vid="iv_close"] < * > [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/14946137',
        },
      ],
    },
  ],
});
