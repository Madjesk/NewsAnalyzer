import '../style/analytic.css';
import Statistics from '../js/components/Statistics';
import {
    request,
    requestsPerWeek,
    headlinesMentions,
    mounth,
    datesColumn,
    boardRow,
    daysColumn,
    daysOfWeek
} from "../js/constants/const"
import {getNumberDate, getWeekDay, addWeekDatesToArray} from '../js/utils/utils';

const stat = new Statistics(request, requestsPerWeek, headlinesMentions, mounth, datesColumn, boardRow,
                            getNumberDate, daysColumn, daysOfWeek, getWeekDay, addWeekDatesToArray);

stat.settingInformation();
stat.settingMounth();
stat.addAllDatesInArray();
stat.changeRows();
stat.getWeekDay();
stat.addWeekDatesToArray();
stat.аddDatesToColumn();


