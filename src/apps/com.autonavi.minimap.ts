import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  deprecatedKeys: [0, 11],
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: '更新弹窗-1',
          matches:
            '@[id="com.autonavi.minimap:id/iv_close"] + * > [text^="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13379094',
        },
        {
          key: 2,
          name: '更新弹窗-2',
          actionCdKey: 1,
          matches: '@[text="取消"] + * + [text="去下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13379426',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-广告卡片',
      desc: '关闭首页的所有可关闭的广告卡片',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            'ViewGroup >(1,4) ViewGroup[childCount>=2 && childCount<=4] > ViewGroup + @ViewGroup[childCount=1][visibleToUser=true][clickable=true] > ImageView[desc=null || desc="关闭"][clickable=false]',
          exampleUrls: [
            'https://m.gkd.li/101449500/9a0ef511-4acc-4a7e-9c25-e9384662b3d1',
            'https://m.gkd.li/101449500/57d378eb-334c-4552-81f7-f7393a92412b',
            'https://m.gkd.li/101449500/4c78d23e-10b2-40cb-a156-83237d237a6c',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14715295',
            'https://i.gkd.li/i/14730914',
            'https://i.gkd.li/i/14730915',
            'https://i.gkd.li/i/14784970',
            'https://i.gkd.li/i/14886366', // 误触，https://github.com/Adpro-Team/GKD_subscription/issues/98
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-点亮角落弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: '@ImageView < ViewGroup - ViewGroup >2 [text="一键点亮"]',
      exampleUrls:
        'https://m.gkd.li/101449500/c6275cd3-65eb-4ca1-949d-7d6ff80d6716',
      snapshotUrls: 'https://i.gkd.li/i/14881505',
    },
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13473388',
    },
    {
      key: 10,
      name: '功能类-首页-地图页面上方消息提醒',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/i/12642830',
    },
    {
      key: 12,
      name: '全屏广告-加油页面-优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/i/12642857'],
    },
    {
      key: 13,
      name: '全屏广告-打车页-优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[vid="mapBottomInteractiveView"] - FrameLayout >n ViewGroup[childCount=3] > ViewGroup > ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13806882',
    },
    {
      key: 14,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '【欢迎】弹窗',
          quickFind: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid="fragment_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
          snapshotUrls: 'https://i.gkd.li/i/14800704',
        },
        {
          key: 1,
          name: '签到弹窗',
          quickFind: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '[desc="弹窗"] + [vid="main_map_msg_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
      ],
    },
  ],
});
