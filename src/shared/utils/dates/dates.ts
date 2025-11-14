import moment from "moment";

export const momentFormats = {
    ['dd.MM.yyyy']: 'DD.MM.YYYY'
}

export const defaultDateFormat = 'dd.MM.yyyy';
export const defaultMomentDateFormat = momentFormats[defaultDateFormat];

export const convertDateToUnix = (date: string, format = defaultMomentDateFormat) => {
    if (!date) return;
    return moment(date, format).unix() * 1000;
}

export const convertUnixToDate = (timestamp: number, format = defaultMomentDateFormat) => {
    if (!timestamp) return;
    return moment(timestamp).format(format);
}