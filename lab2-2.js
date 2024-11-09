function isIPAddress(ip) {
    let parts = ip.split('.');
    
    if (parts.length !== 4) {
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];

        if (!/^\d+$/.test(part) || Number(part) < 0 || Number(part) > 255) {
            return false;
        }

        if (part.length > 1 && part[0] === '0') {
            return false;
        }
    }
    
    return true;
}

function findRGBA(text) {
    const rgbaRegex = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)/;
    const match = text.match(rgbaRegex);

    return match ? match[0] : null;
}

function findHexColor(text) {
    const hashIndex = text.indexOf('#');
  
    if (hashIndex === -1) return null;
  
    const hex3 = text.slice(hashIndex, hashIndex + 4);
    const hex6 = text.slice(hashIndex, hashIndex + 7);
  
    const isValidHex3 = /^#[0-9A-Fa-f]{3}$/.test(hex3);
    const isValidHex6 = /^#[0-9A-Fa-f]{6}$/.test(hex6);
  
    if (isValidHex3) return hex3;
    if (isValidHex6) return hex6;
  
    return null;
}

function findTags(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>`, 'gi');
    return text.match(regex) || [];
}

function findPosNum(text) {
    const matches = text.match(/\b\d+(\.\d+)?\b/g) || [];
    const positiveNumbers = matches.map(Number).filter(num => num > 0);
    
    return positiveNumbers;
}

function findDates(text) {
    const datePattern = /\b\d{4}-\d{2}-\d{2}\b/g;
    const matches = text.match(datePattern) || [];
    
    return matches;
}

// Приклад використання:
const text = "Дати: 2023-05-01, 1999-12-31, та неправильна дата 2023-13-01.";
console.log(findDates(text)); // Виведе: ['2023-05-01', '1999-12-31']
