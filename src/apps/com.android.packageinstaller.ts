import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '@LinearLayout > [text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13206444',
        },
        {
          key: 1,
          activityIds: 'com.android.packageinstaller.NewInstallInstalling',
          matches: '@[clickable=true][childCount=1] > [text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13206476',
        },
        {
          actionCdKey: 1,
          key: 2,
          activityIds: 'com.android.packageinstaller.NewInstallInstalling',
          matches:
            '[id="com.android.packageinstaller:id/done_button"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13766420',
            'https://i.gkd.li/import/13962438', //text=null
          ],
        },
      ],
    },
  ],
});
