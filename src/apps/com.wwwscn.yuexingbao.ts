import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wwwscn.yuexingbao',
  name: '悦通行',
  groups: [
    {
      key: 1,
      name: '功能类-扫码成功点击【确认并解锁】',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.wwwscn.yuexingbao.ui.qrcode.ScanResultActivity',
          matches: '[text="扫码成功"] + [vid="btn_open_net"]',
          exampleUrls: 'https://e.gkd.li/01d5e4a9-7f70-4d43-ba51-a99c4a1c3d1e',
          snapshotUrls: 'https://i.gkd.li/i/18048927',
        },
      ],
    },
  ],
});
