module.exports = function toReadable (number) {
  const units = n => { 
    switch(n) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
    }
  };

  const tens = n => {
    switch(Math.floor(number / 10)) {
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
    }
  }


  if (number < 20) {
    return units(number);
  }

  if (number < 100) {
    const t = tens(number);
    const u = number % 10;

    if (u > 0) {
      return `${t} ${units(u)}`
    }    
    return t;
  }

  const h = Math.floor(number / 100);
  const rest = number % 100;

  if (rest === 0) {
    return `${units(h)} hundred`;
  }

  return `${units(h)} hundred ${toReadable(rest)}`;  
}
