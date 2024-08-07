import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger.web',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      resetMatch: 'app',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          matches: ['[text="更新 Telegram"]', '[text="请稍后提醒我"] - View'],
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/13847837',
    },
    {
      key: 2,
      name: '通知提示-同意消息通知',
      desc: '点击【继续】',
      fastQuery: true,
      activityIds: 'org.telegram.ui.LaunchActivity',
      rules: '[text="打开通知"] +n [text="继续"]',
      snapshotUrls: 'https://i.gkd.li/i/14048218',
    },
  ],
});
