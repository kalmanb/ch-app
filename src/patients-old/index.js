// @flow
import { actions } from './actions';
import reducer from './reducer';
import sagas from './sagas';

// re-select
// import * as selectors from './selectors'
import MainSection from './components/MainSection';

export const name = 'patients';

export default {
  name,
  actions,
  reducer,
  sagas,
  MainSection,
};
