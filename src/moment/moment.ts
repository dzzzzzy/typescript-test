import * as moment from 'moment';

console.log(moment().unix() + 86400);

console.log(moment().add(20, 'year').toDate());