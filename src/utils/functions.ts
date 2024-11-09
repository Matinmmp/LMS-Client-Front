var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g,];
var arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

const toPersianNumber = (s: any) => String(s).replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);

function secondsToTimeString(secondsInput: string) {
    const hours = Math.floor(+secondsInput / 3600); // تبدیل به ساعت
    const minutes = Math.floor((+secondsInput % 3600) / 60); // تبدیل به دقیقه
    const seconds = +secondsInput % 60; // تبدیل به ثانیه

    // استفاده از padStart برای اطمینان از اینکه دو رقم داریم
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const numberSeparator = (number: string) => {
    number += '';
    number = number.replace(',', '');
    let x = number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}

const fixNumbers = (str: string) => {
    if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], `${i}`).replace(arabicNumbers[i], `${i}`);
        }
    }
    return str;
};


const formatDate = (date: string) => {
    try {
        // تبدیل رشته تاریخ به یک شیء تاریخ معتبر
        const validDate = new Date(date);

        const persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(validDate);

        return persianDate;
    } catch (error: any) {
        console.log(error);
        return '';
    }
}

export {
    toPersianNumber,
    secondsToTimeString,
    numberSeparator,
    fixNumbers,
    formatDate
}