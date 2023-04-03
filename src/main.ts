import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';
import { StandardConfiguration } from '@aurelia/runtime-html';

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
    useHref: false,
    basePath: '/',
    // buildTitle: (t) => t. + 'DevSquad',
  }),
)
  .register(pages, elements)
  .app(App)
  .start();
