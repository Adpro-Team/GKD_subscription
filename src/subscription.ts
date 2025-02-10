import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';

export default defineGkdSubscription({
  id: 825,
  name: 'AdproのGKD订阅 - 维护终止',
  version: 0,
  author: 'Adpro(AdproTeam)',
  checkUpdateUrl: './Adpro_gkd.version.json5',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  categories,
  globalGroups,
  apps: apps,
});
