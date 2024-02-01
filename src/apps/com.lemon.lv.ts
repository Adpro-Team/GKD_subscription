import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 0,
      name: '局部广告-导出界面底部广告',
      desc: '关闭完成导出后的下方广告',
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          matches: '@FlattenUIImage + LynxAdComponentView',
          snapshotUrls: 'https://i.gkd.li/import/12911010',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-选择素材界面上方广告',
      activityIds: 'com.vega.libcutsame.select.view.CutSameSelectMediaActivity',
      rules:
        '[vid="gallery_layout_below_category_view"] >3 [text="立即下载"] -n LynxFlattenUI[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14122865',
    },
  ],
});
