import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  deprecatedKeys: [3],
  groups: [
    {
      key: 0,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text="体验一下"] + [text="关闭"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d2b6ee77-ae06-4873-a106-db4ce2324777',
          snapshotUrls: 'https://i.gkd.li/i/14321107',
        },
        {
          key: 1,
          matches: '[text="开启青少年模式"] + * > [text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/29534293-f3c7-4187-a36f-47e37fef2f42',
          snapshotUrls: 'https://i.gkd.li/i/14473006',
        },
        {
          key: 2,
          matches: '@[desc="关闭"] +2 [text="开启青少年模式"]',
          exampleUrls:
            'https://m.gkd.li/57941037/adeb1ebc-8aec-4bb1-b279-d86e2e9b0b74',
          snapshotUrls: 'https://i.gkd.li/i/14567078',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-关闭用户推荐',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[id="com.ss.android.ugc.aweme:id/desc"][text="减少此类推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/12520962',
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="换一个"] - FrameLayout[clickable=true] > ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12520943'],
        },

        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="你可能感兴趣"] < LinearLayout + [text="隐藏"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12675396'],
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +(2) @FrameLayout > [desc="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12675129',
        },
        {
          activityIds:
            'com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity',
          matches:
            '[text="朋友推荐"] < LinearLayout + FrameLayout > [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12675245',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-关闭朋友推荐弹窗',
      quickFind: true,
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules: '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12525387',
        'https://i.gkd.li/i/12525389',
      ],
    },
    {
      key: 4,
      name: '局部广告-首页左上角广告',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules:
        'ViewGroup + FrameLayout[id=null] > FrameLayout[childCount=2][id!=null] > ImageView[desc="关闭"][clickable=true][id!=null]',
      snapshotUrls: 'https://i.gkd.li/i/12749276',
    },
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      quickFind: true,
      rules:
        '[id="android:id/content"] >2 RelativeLayout[childCount<=5] > @ImageView[clickable=true][id!=null] - TextView[text="广告"][id!=null]',
      snapshotUrls: 'https://i.gkd.li/i/12769137',
    },
    {
      key: 6,
      name: '评价提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '点击[取消]',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="取消"] +2 [text="五星好评"]',
      snapshotUrls: 'https://i.gkd.li/i/13053628',
      exampleUrls:
        'https://m.gkd.li/101449500/8225f12c-adcf-4385-a1ca-670e62906cd2',
    },
    {
      key: 7,
      name: '功能类-设置无声进入抖音',

      quickFind: true,
      desc: '点击[拒绝]',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="拒绝"] + [text="去设置"]',
      snapshotUrls: 'https://i.gkd.li/i/13256087',
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '自动点击“暂不”',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          name: '顶部卡片',
          matches:
            '@[text="暂不"][focusable=true] < LinearLayout - LinearLayout >(2) [text="开启朋友通知"]',
          snapshotUrls: 'https://i.gkd.li/i/12675129',
        },
        {
          name: '半幅弹窗',
          matches: '[text="及时获得消息提醒"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13669790',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动勾选原图',
      desc: '聊天发送图片时自动勾选原图',
      quickFind: true,
      activityIds:
        'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
      rules: '[text="原图"][desc="未选中/复选框 原图"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12846036', // 未选中
        'https://i.gkd.li/i/12846040', // 已选中
      ],
    },
    {
      key: 12,
      name: '功能类-休息提醒',
      quickFind: true,
      rules: [
        {
          matches: '[text="可进入使用管理助手更改设置"] -2 Button[text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241564',
            'https://i.gkd.li/i/13372604',
          ],
        },
        {
          matches: '[text="管理使用时间"] + Button[text="忽略提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13372725',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-添加快捷方式到桌面',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '搜索快捷方式',
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          action: 'back',
          matches: 'ViewGroup[desc="添加搜索到桌面"]',
          snapshotUrls: 'https://i.gkd.li/i/13338556',
        },
        {
          name: '商城快捷方式',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="添加抖音商城到桌面"] +2 LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13669682',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-视频播放中途插入的打招呼界面',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: 'FrameLayout > @[desc="关闭"] + ViewGroup > [text$="打个招呼"]',
      snapshotUrls: 'https://i.gkd.li/i/13379307',
    },
    {
      key: 15,
      name: '全屏广告-关闭商城推荐',
      desc: '点击【不感兴趣】',
      rules: '@[text="不感兴趣"][clickable=true] + [text="去商城搜索更多"]',
      snapshotUrls: 'https://i.gkd.li/i/13800207',
    },
    {
      key: 16,
      name: '功能类-申请开启小组件弹窗',
      desc: '点击【暂不开启】',
      rules: [
        {
          key: 0,
          name: '搜索小组件',
          quickFind: true,
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          matches: '[text="开启搜索组件到桌面"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/14123300',
        },
      ],
    },
    {
      key: 17,
      name: '定位提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
      rules: [
        {
          name: '弹窗',
          matches: '[text^="开启定位"] +3 LinearLayout > [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13974006',
        },
        {
          name: '顶部横条',
          matches: '@ImageView[clickable=true] - [text^="开启定位"]',
          snapshotUrls: 'https://i.gkd.li/i/13974007',
        },
      ],
    },
    {
      key: 18, //类似key 15
      name: '全屏广告-老用户福利',
      desc: '点击【不感兴趣】',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="不感兴趣"][clickable=true] + [text="更多优惠商品"]',
      snapshotUrls: 'https://i.gkd.li/i/14157498',
    },
  ],
});
