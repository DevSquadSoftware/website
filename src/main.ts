import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { StandardConfiguration } from '@aurelia/runtime-html';

import 'mdb-ui-kit';

import { App } from './app';
import * as elements from './elements';
import * as pages from './pages';

import 'mdb-ui-kit/css/mdb.min.css';

void Aurelia.register(
  StandardConfiguration.customize((y) => {
    y.coercingOptions = {
      coerceNullish: false,
      enableCoercion: true,
    };
  }),
  RouterConfiguration.customize({
    useUrlFragmentHash: false,
    useDirectRouting: true,
    useHref: false,
    basePath: '/',
    title: {
      appTitle: '${componentTitles}${appTitleSeparator}DevSquad',
    },
  }),
)
  .register(pages, elements)
  .app(App)
  .start();
