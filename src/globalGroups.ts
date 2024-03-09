import apps from './rawApps';
import type { RawGlobalGroup } from '@gkd-kit/api';
import type { RawAppAddProp, RawAppGroupAddProp } from './types';
import * as utils from './utils';

const diabledAppIds = [
  'com.android.systemui', // 通知栏界面/下拉开关/控制中心
  'com.android.settings', // 系统设置
  'com.android.mms', // 短信/信息
  'com.android.phone', // 拨号
  'com.android.incallui', // 通话
  'com.android.contacts', // 联系人/电话簿
  'com.android.providers.Telephony', // 电话和短信存储
  'com.android.phone.recorder', // 录音
  'com.android.soundrecorder', // 录音机
  'com.android.server.telecom', // 来电拒接短信服务

  // 排除软件包安装程序
  'com.android.packageinstaller',
  'com.google.android.packageinstaller', // Google Play
  'com.miui.packageinstaller', // 小米系
  'com.samsung.android.packageinstaller', // 三星系
  'com.oplus.appdetail', // 一加系

  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'com.eg.android.AlipayGphone', // 支付宝
  'li.songe.gkd',

  'com.google.ar.core', // 谷歌AR服务
  'com.google.android.syncadapters.calendar', // 谷歌日历同步

  // 小米系
  'com.miui.aod', // miui 锁屏界面
  'miui.systemui.plugin', // miui 状态栏界面
  'com.miui.securityadd', // 系统服务组件

  // 华为系
  'com.huawei.android.launcher', // 桌面
  'com.huawei.mediacontroller', // 音频播控中心

  // 荣耀系
  'com.hihonor.android.launcher', // 桌面

  // OPPO 系
  'com.oppo.launcher', // 桌面

  // VIVO 系
  'com.bbk.launcher2', // 桌面

  // 一加系
  'net.oneplus.launcher', // 桌面

  // 三星系
  'com.sec.android.app.launcher', // 桌面

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器
];

// 如果应用规则已有全局规则中的某一类的规则, 则在对应全局规则禁用此应用
function filterAppsByGroup(
  apps: RawAppAddProp[],
  groupNamePrefix: string,
): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter(
          (g: RawAppGroupAddProp) =>
            g.name.startsWith(groupNamePrefix) && g.global !== true,
        ).length > 0,
    )
    .map((a) => a.id);
}

// 设置单独禁用
const openDiabledAppIds = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const updateDiabledAppIds = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '更新提示'),
]);
const youngDiabledAppIds = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '青少年模式'),
]);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: utils.OPEN_AD_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead")]',
      },
    ],
    apps: [...openDiabledAppIds].map((id) => ({ id, enable: false })),
  },
  {
    key: 1,
    name: '更新提示',
    order: utils.UPDATE_ORDER,
    actionMaximum: 1,
    matchTime: 10000,
    actionCdKey: 0,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience")&&text!*="自动"&&text!*="自動"&&(text!*="成功"&&text!*="失败"&&text!*="失敗"&&(text!*="已" || text*="已知")&&text!*="检查更新")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(((text*="立即" || text*="马上" || text*="并" || text*="现在" || text*="立刻" || text*="抢先")&&(text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验")) || text="更新" || text="下载" || text="安装" || text="升级" || text="确定" || text="好,升级")&&text.length<6]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid^="close" || vid^="Close" || vid^="closeIv" || vid*="_close" || vid*="_Close" || vid$="close" || vid$="Close" || vid$="cancel" || vid$="Cancel" || vid$="cancle" || vid$="Cancle"]',
        ],
      },
    ],
    apps: [...updateDiabledAppIds].map((id) => ({ id, enable: false })),
  },
  {
    key: 2,
    name: '青少年模式',
    order: utils.YOUNG_ORDER,
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][((text*="青少年" || text*="未成年") && text*="模式" || text*="儿童模式") || ((desc*="青少年" || desc*="未成年") && desc*="模式")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text*="知道了" || text*="关闭" || text="我已知晓" || desc*="知道了" || desc*="关闭"]',
        ],
      },
    ],
    apps: [...youngDiabledAppIds].map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
