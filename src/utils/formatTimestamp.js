import moment from 'moment';

export default function formatTimestamp(timestamp) {
  const displayFormat = 'hh:mma DD/MM/YY';
  return moment(timestamp).format(displayFormat);
};