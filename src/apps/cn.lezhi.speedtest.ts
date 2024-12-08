import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
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
