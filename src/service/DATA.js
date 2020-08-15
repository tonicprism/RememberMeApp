import moment from 'moment';
import portugueseLanguage from 'moment/locale/pt-br';

moment.locale('pt-br', portugueseLanguage);

module.exports = [
  {
    id: 1,
    timeToRemember: 1205,
    titleOfMemory: 'Enviar video para grupo da sala',
    contentOfMemory: '',
    createdAtDate: moment().format('L'),
    createdAtHours: moment().format('LT'),
    timeStamp: moment().format(),
  },

  {
    id: 2,
    timeToRemember: 1200,
    titleOfMemory: 'Enviar video para grupo da sala',
    contentOfMemory: '',
    createdAtDate: moment().format('L'),
    createdAtHours: moment().format('LT'),
    timeStamp: moment().format(),
  },

  {
    id: 3,
    timeToRemember: 180,
    titleOfMemory: 'Enviar video para grupo da sala',
    contentOfMemory: '',
    createdAtDate: moment().format('L'),
    createdAtHours: moment().format('LT'),
    timeStamp: moment().format(),
  },
];
