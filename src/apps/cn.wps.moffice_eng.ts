import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS Office',
  groups: [
    {
      key: 1,
      name: '分段广告-首页文档列表广告',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505350',
            'https://i.gkd.li/i/12505286',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          matches: '[text="不喜欢此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505365',
            'https://i.gkd.li/i/13259090',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.AfterLoginActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      ],
      rules: '[id="cn.wps.moffice_eng:id/afterlogin_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13259097',
        'https://i.gkd.li/i/12882712',
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
      snapshotUrls: 'https://i.gkd.li/i/12882371',
    },
    {
      key: 4,
      name: '功能类-开启WPS云服务',
      desc: '自动点击不开启',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w',
      ],
      rules: [
        {
          matches:
            '[id="cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882536',
            'https://i.gkd.li/i/12882610',
            'https://i.gkd.li/i/12882678',
          ],
        },
        {
          matches: '[id="cn.wps.moffice_eng:id/dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12882554',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-文档末尾广告',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.wps.moffice_eng:id/doc_end_ad_container_main"] >2 [id="cn.wps.moffice_eng:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13513911',
        },
        {
          preKeys: 1,
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13513914',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-首页底部广告',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
      rules: '[id="cn.wps.moffice_eng:id/home_banner_ad_spread_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13804525',
    },
    {
      key: 7,
      name: '局部广告-首页底部升级会员卡片',
      fastQuery: true,
      rules: [
        {
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches: '[id="cn.wps.moffice_eng:id/phone_message_close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13945839',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-体验超级会员弹窗',
      fastQuery: true,
      rules: [
        {
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            'View[childCount=3] > Image[text!=null] +2 @TextView[clickable=true] <<n [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13945835',
        },
      ],
    },
  ],
});
