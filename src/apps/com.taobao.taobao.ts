import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
            'com.alibaba.triver.container.TriverMainActivity',
          ],
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642792',
            'https://i.gkd.li/i/13180826',
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/13198239',
            'https://i.gkd.li/i/13198052',
            'https://i.gkd.li/i/13249418',
            'https://i.gkd.li/i/14905372',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-消息页面-热门活动卡片',
      fastQuery: true,
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: 'View[desc.length>0] +2n FrameLayout > TextView[text="퀺"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12642795',
        'https://i.gkd.li/i/13197877',
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '商品详情右侧悬浮广告',
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'View[childCount=2] > @Image[text!=""][clickable=true] + View',
          snapshotUrls: 'https://i.gkd.li/i/13521702',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-关闭小额免密支付开关',
      actionMaximum: 1,
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules:
        '@CheckBox[checked=true][checked=true] < * - [text~="开通(.*)免密支付"]',
      exampleUrls:
        'https://m.gkd.li/101449500/a9e21a7d-ab16-4ba4-b678-9fe8dcbb6c72',
      snapshotUrls: 'https://i.gkd.li/i/14471660',
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text^="开启系统通知"] + @Image[visibleToUser=true] <<n [vid="poplayer_inner_view"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13446901',
        'https://i.gkd.li/i/13455424',
        'https://i.gkd.li/i/15104645',
      ],
    },
    {
      key: 9,
      name: '功能类-各级页面-添加到首页弹窗',
      desc: '自动点击退出',
      fastQuery: true,
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity',
        'com.alibaba.triver.container.TriverMainActivity',
      ],
      rules: 'TextView[text="去首页"] + TextView[text="退出"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13197553',
        'https://i.gkd.li/i/13197546',
      ],
    },
    {
      key: 10,
      name: '全屏广告-视频页面-活动弹窗',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules:
        'View[id=null] > [text="立即参加"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12642813',
    },
    {
      key: 11,
      name: '功能类-视频页面-签到弹窗',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: '@View[clickable=true] - View > View > TextView[text="立即签到"]',
      snapshotUrls: 'https://i.gkd.li/i/12642798',
    },
    {
      key: 12,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="update_imageview_cancel_v2"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13336760',
        'https://i.gkd.li/i/13695520',
        'https://i.gkd.li/i/14899863',
      ],
    },
    {
      key: 13,
      name: '功能类-小额免密支付弹窗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: '@[text="关闭"] < * <3 * < * + * >3 [text$="小额免密支付"]',
      snapshotUrls: 'https://i.gkd.li/i/13438414',
    },
    {
      key: 14,
      name: '功能类-将小组件添加到手机桌面',
      desc: '点击取消',
      activityIds: 'com.alibaba.triver.container.TriverMainActivity',
      rules: [
        {
          action: 'clickCenter',
          matches:
            'View[childCount=2] >3 View[text="立即添加"] + View[text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13598578',
            'https://i.gkd.li/i/13853510', //误触快照
          ],
        },
      ],
    },
    {
      key: 15,
      name: '权限提示-悬浮窗权限',
      desc: '点击“否”',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.taobao.android.detail2.core.framework.floatwindow.permission.PermissionActivity',
      rules: [
        {
          matches: [
            '[id="android:id/message"][text*="悬浮窗权限"]',
            '[id="android:id/button2"][text="否"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13588165',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-花呗升级报送征信',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/i/13628020',
        },
        {
          key: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="根据相关法律法规要求，请尽快完成花呗升级"] <<n FrameLayout FrameLayout @[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13691864',
        },
        {
          key: 2,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[id="com.taobao.taobao:id/flybird_userinfo"] + * [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/i/13898735',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-搜索结果-自动点击反馈理由',
      activityIds: 'com.taobao.search.sf.MainSearchResultActivity',
      rules: '[desc="不喜欢这个商品"]',
      snapshotUrls: 'https://i.gkd.li/i/14142196',
    },
    {
      key: 18,
      name: '局部广告-商品详情页直播悬浮窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          matches: '[vid="view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15124094',
        },
      ],
    },
  ],
});
