import cryptoRandomString from 'crypto-random-string';
export const generateId = (generationOptions, formatOptions) => {
    const id = cryptoRandomString(generationOptions);
    const formattedId = formatId(id, formatOptions);
    return {
        id,
        formattedId,
        creationDateTime: new Date()
    }
};

const formatId = (id, formatOptions) => {
    const cleanIdFormat = `_${id}`;
    const format = formatOptions.format;
    const isFormat = (type) => format && format === type;
    if (!formatOptions) {
        return cleanIdFormat;
    } else {
        if (isFormat('AKA_PROD_ID')) {
            const a = id.split('').reverse();
            return `_${a[9]}${a[8]}${a[7]}-${a[6]}${a[5]}${a[4]}-${a[3]}${a[2]}${a[1]}${a[0]}`;
        } else if (isFormat('CLEAN')) {
            return cleanIdFormat;
        } else {
            throw new Error('Unknown ID format');
        }
    }
};