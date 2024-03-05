import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 825,
  version: 0,
  name: 'Adpro的GKD订阅',
  author: 'Adpro - AdproTeam',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  updateUrl:
    'https://raw.gitmirror.com/Adpro-Team/GKD_subscription/main/dist/Adpro_gkd.json5',
  checkUpdateUrl:
    'https://raw.gitmirror.com/Adpro-Team/GKD_subscription/main/dist/Adpro_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
