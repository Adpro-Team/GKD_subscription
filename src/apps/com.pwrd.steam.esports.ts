import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
  deprecatedKeys: [0],
  groups: [
    {
      key: 10,
      quickFind: true,
      name: '开屏广告',
      activityIds:
        'com.pwrd.steam.esports.ui.activity.launcher.AdvertisementActivity',
      rules: '[id="com.pwrd.steam.esports:id/tv_advertisement_timer"]',
      snapshotUrls: [
        'https://i.gkd.li/import/14166171', //开屏广告跳过按钮
      ],
    },
  ],
});
