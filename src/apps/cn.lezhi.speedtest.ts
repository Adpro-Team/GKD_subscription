import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '字节SDK',
          matches:
            '@[id="com.byted.pangle:id/tt_splash_skip_btn"] <<n [id="cn.lezhi.speedtest:id/fl_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13544242',
        },
        {
          key: 1,
          name: '腾讯SDK-1',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13626049',
        },
        {
          key: 2,
          name: '腾讯SDK-2',
          matches:
            '@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < [vid="fl_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13885906',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: 'cn.lezhi.speedtest.main5.MainV5Activity',
      rules:
        '[id="cn.lezhi.speedtest:id/rl_update_dialog_layout"] >n [id="cn.lezhi.speedtest:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12727619',
    },
  ],
});
