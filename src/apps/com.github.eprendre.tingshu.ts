import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 1,
      name: '综合广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '局部广告',
          activityIds: [
            'com.github.eprendre.tingshu.ui.search.AggregateSearchActivity',
            'com.github.eprendre.tingshu.ui.play.PlayerActivity',
          ],
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: [
            'https://i.gkd.li/i/12783466',
            'https://i.gkd.li/i/13334850',
            'https://i.gkd.li/i/13446735',
          ],
        },
        {
          key: 1,
          name: '分段广告-1',
          fastQuery: true,
          activityIds: 'com.github.eprendre.tingshu.ui.play.PlayerActivity',
          matches: '@[desc="close"] <<n [vid="ad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/18048890',
        },
        {
          key: 2,
          preKeys: 1,
          name: '分段广告-2',
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches: '@* > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/18048901',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.github.eprendre.tingshu.ui.SplashActivity',
          matches: [
            'ViewGroup[childCount=2] > [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13625303',
        },
      ],
    },
  ],
});
