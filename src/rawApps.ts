import { RawApp, RawAppGroup } from '@gkd-kit/api';
import categories from './categories';
import { batchImportApps } from '@gkd-kit/tools';
import {
  OPEN_AD_ORDER,
  YOUTH_MODE_ORDER,
  UPDATE_PROMPT_ORDER,
} from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];

apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    for (const i of categories) {
      if (g.name.startsWith(i.name)) {
        if (!g.name.startsWith(categories[0].name)) g.enable = false;
        else g.order = OPEN_AD_ORDER;

        if (g.name.startsWith(categories[1].name)) g.order = YOUTH_MODE_ORDER;

        if (g.name.startsWith(categories[2].name))
          g.order = UPDATE_PROMPT_ORDER;

        return;
      }
    }
    g.enable = false;
    g.name = `${categories[11].name}-${g.name}`;
  });
  rawApps.push(appConfig);
});

export default rawApps;
