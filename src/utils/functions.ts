var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g,];
var arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

const convertToEnglishNumbers = (input: string): string => {
    // تعریف نقشه اعداد فارسی به انگلیسی
    const persianToEnglishMap: { [key: string]: string } = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
    };

    // تبدیل هر عدد فارسی به معادل انگلیسی
    return input.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char] || char);
};


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

function hoursAndMinutesString(secondsInput: string): string {
    const totalSeconds = +secondsInput; // تبدیل به عدد
    const hours = Math.floor(totalSeconds / 3600); // تبدیل به ساعت
    const minutes = Math.floor((totalSeconds % 3600) / 60); // تبدیل به دقیقه

    const formattedHours = hours > 0 ? `${hours}h` : ""; // اگر ساعت داریم
    const formattedMinutes = minutes > 0 ? `${minutes}m` : ""; // اگر دقیقه داریم

    return `${formattedHours} ${formattedMinutes}`.trim(); // حذف فاصله اضافی
}

function secondsToTimeString2(secondsInput: string): string {
    const totalSeconds = +secondsInput; // تبدیل به عدد
    const hours = Math.floor(totalSeconds / 3600); // تبدیل به ساعت
    const minutes = Math.floor((totalSeconds % 3600) / 60); // تبدیل به دقیقه
    const seconds = totalSeconds % 60; // باقی‌مانده ثانیه

    // استفاده از padStart برای نمایش دو رقمی
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return hours > 0
        ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}` // اگر ساعت داریم
        : `${formattedMinutes}:${formattedSeconds}`; // اگر ساعت نداریم
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

//۱۴۰۳/۰۸/۲۵
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
        
        return '';
    }
}


const formatDate2 = (date: string) => {
    try {
        // تبدیل رشته تاریخ به یک شیء تاریخ معتبر
        const validDate = new Date(date);

        // استخراج نام روز هفته
        const dayOfWeek = new Intl.DateTimeFormat('fa-IR', {
            weekday: 'long',
        }).format(validDate);

        // استخراج تاریخ به صورت شمسی
        const persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }).format(validDate);

        return `${dayOfWeek} ${persianDate}`;
    } catch (error: any) {
        return '';
    }
};

function encodeToShortCode(text:string) {
    // محاسبه هش ساده با استفاده از کدهای کاراکتر
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = (hash << 5) - hash + text.charCodeAt(i);
        hash |= 0; // تبدیل به 32 بیت
    }
    // تبدیل به هگزادسیمال و برش به 4 کاراکتر
    return Math.abs(hash).toString(16).substring(0, 4);
}

const encodeTitle = (title:string) => {
    try{
        return title.replace(/\s/g, '_').replace(/\u200C/g, '-');
    }
    catch{
        return title;
    }
}

const decodeTitle = (title: string) => {
    try{
        return title.replace(/_/g, ' ').replace(/-/g, '\u200C');
    }
    catch{
        return title;
    }
    
};

export {
    decodeTitle,
    encodeTitle,
    toPersianNumber,
    secondsToTimeString,
    numberSeparator,
    fixNumbers,
    formatDate,
    formatDate2,
    encodeToShortCode,
    hoursAndMinutesString,
    secondsToTimeString2,
    convertToEnglishNumbers
}