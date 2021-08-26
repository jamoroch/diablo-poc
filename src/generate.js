import cryptoRandomString from 'crypto-random-string';
const idPrefix = '_';
export const generateId = (generationOptions, formatOptions) => {
    const numberOfIds = generationOptions.batchQuantity || 1;
    if (numberOfIds > 1) {
        const ids = [];
        for (let i = 0; i < numberOfIds; i++) {
            const id = cryptoRandomString(generationOptions);
            ids.push({
                id: `${idPrefix}${id}`,
                formattedId: formatId(id, formatOptions)
            });
        }
        return {
            ids
        };
    } else {
        const id = cryptoRandomString(generationOptions);
        return {
            id: `${idPrefix}${id}`,
            formattedId: formatId(id, formatOptions)
        }
    }
};

const formatId = (id, formatOptions) => {
    const cleanIdFormat = `_${id}`;
    const format = formatOptions.format;
    const isFormat = (type) => format && format === type;
    console.log(JSON.stringify(formatOptions, null, 2));
    if (!formatOptions.format) {
        return cleanIdFormat;
    } else {
        if (isFormat('FOO')) {
            const a = id.split('').reverse();
            return `${idPrefix}${a[9]}${a[8]}${a[7]}-${a[6]}${a[5]}${a[4]}-${a[3]}${a[2]}${a[1]}${a[0]}`;
        } else if (isFormat('CLEAN')) {
            return cleanIdFormat;
        } else {
            throw new Error('Unknown ID format');
        }
    }
};