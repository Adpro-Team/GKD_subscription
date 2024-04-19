import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      quickFind: true,
      rules: [
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches: '[text^="广告"] + [text="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169', // 播放界面
        },
        {
          key: 2,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '@[desc="关闭"] -(1,2) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ImageView - ImageView - RelativeLayout >3 [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页-底部广告弹窗',
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13115121',
        'https://i.gkd.li/i/14798904',
      ],
    },
    {
      key: 3,
      name: '更新提示-内测体验弹窗',
      desc: '点击[不再提醒]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/13178485',
    },
    {
      key: 4,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://i.gkd.li/i/13197868',
    },
    {
      key: 5,
      name: '全屏广告-播放页-推荐开启高音质弹窗',
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: [
        {
          key: 0,
          matches:
            '[text^="推荐您开启"] -3 [desc="关闭"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14550144',
        },
      ],
    },
    {
      key: 6,
      name: '评价提示',
      quickFind: true,
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: '[text*="好评"] <4 ViewGroup + [vid="close_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/14881903',
    },
  ],
});
