import { defineGkdApp } from '@gkd-kit/define';

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
        {
          key: 4,
          quickFind: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15041019',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: [
        {
          forcedTime: 5000,
          matches: 'View[id="js_close_btn"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121',
            'https://i.gkd.li/i/14798904',
          ],
        },
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
    {
      key: 7,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          quickFind: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击X',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '@[desc="关闭按钮"] <n * > [desc^="看广告"]',
      snapshotUrls: 'https://i.gkd.li/i/13806773',
    },
    {
      key: 9,
      name: '全屏广告-VIP弹窗',
      desc: '点击X',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[id="android:id/content"] >4 ViewGroup[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
          matches:
            '@[desc="关闭"][clickable=true][visibleToUser=true] + * > [text^="正在试听" || text$="到期"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
          ],
        },
      ],
    },
  ],
});
