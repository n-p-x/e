const deps = ['lodash'];

import _ from 'lodash';

function script({ positional, named }) {
  console.log('Lodash version:', _.VERSION);
  console.log('Positional:', positional);
  console.log('Named:', named);
}
