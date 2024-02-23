import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.damai:id/homepage_advert_pb"]',
      snapshotUrls: 'https://i.gkd.li/i/12472623',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'cn.damai.homepage.MainActivity',
          matches:
            '[id="cn.damai:id/homepage_popup_window_image"] + [id="cn.damai:id/homepage_popup_window_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/13627900',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      quickFind: true,
      activityIds: 'cn.damai.homepage.MainActivity',
      rules: '[text*="通知权限"] +2 LinearLayout > [text="不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13985393',
    },
  ],
});
