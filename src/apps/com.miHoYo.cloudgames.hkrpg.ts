import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '功能类-流量提醒',
      desc: '点击[使用流量进行游戏]',
      quickFind: true,
      activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
      rules:
        'TextView[id="com.miHoYo.cloudgames.hkrpg:id/cancelTv"][text="使用流量进行游戏"][visibleToUser=true]',
      snapshotUrls: ['https://i.gkd.li/i/14784161'],
    },
  ],
});
