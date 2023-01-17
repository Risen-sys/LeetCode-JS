var romanToInt = function(s) {
    const numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let skip = false;
    return s.split('').reduce(function(acc, cv, i, arr) {
        if (skip) {
            skip = false;
            return acc;
        }
        
        let current = numerals[cv];
        let next = numerals[arr[i+1]];
        
        if (current < next) {
            skip = true;
            return acc + (next - current);
        } else {
            return acc + current;
        }
    }, 0);
};