import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      rules: [
        '[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
        '[id="gov.pianzong.androidnga:id/ksad_splash_circle_skip_view"]',
        '[id="gov.pianzong.androidnga:id/ksad_skip_view_skip"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12476484',
        'https://i.gkd.li/import/12706127', // activityIds: 'com.miui.home.launcher.Launcher',
        'https://i.gkd.li/import/12864707', // activityIds: 'gov.pianzong.androidnga.activity.LoadingActivity',
        'https://i.gkd.li/import/12911882', // activityIds: 'gov.pianzong.androidnga.activity.WarmstartActivity'
        'https://i.gkd.li/import/13798686', // id="gov.pianzong.androidnga:id/ksad_skip_view_skip"
      ],
    },
    {
      key: 1,
      name: '首页-推荐-广告卡片',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: ['[id="gov.pianzong.androidnga:id/iv_close_ad"]'],
      snapshotUrls: 'https://i.gkd.li/import/12482727',
    },
    {
      key: 2,
      name: '局部广告-话题-帖子列表广告',
      desc: '点击卡片x按钮关闭广告',
      activityIds:
        'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
        {
          key: 0,
          matches: 
            '[id="gov.pianzong.androidnga:id/rv_post_list"] > FrameLayout *[childCount<=4] > [text!="" && text!=null] +(1,2) *[childCount<=3 && childCount!=2] > @[name*="Image" || name*="TextView"][text!=""][index=0 || index>1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12655805',
            'https://i.gkd.li/import/12706140',
            'https://i.gkd.li/import/13303236',
            'https://i.gkd.li/import/14123759',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '社区-顶部广告',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
      snapshotUrls: ['https://i.gkd.li/import/12706132'],
    },
  ],
});
