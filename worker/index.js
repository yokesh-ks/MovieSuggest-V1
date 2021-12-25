import { CronJob } from 'cron';

import FetchMovies from './tasks/fetch-movie.js';

new CronJob('* * * * *', FetchMovies, null, true, 'America/Los_Angeles');