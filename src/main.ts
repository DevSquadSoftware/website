import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';

import 'mdb-ui-kit';

import { App } from './app';
import * as elements from './elements';
import * as pages from './pages';

import 'mdb-ui-kit/css/mdb.min.css';

void Aurelia.register(RouterConfiguration.customize({ useUrlFragmentHash: false, useDirectRouting: true, useHref: false }))
  .register(pages, elements)
  .app(App)
  .start();
