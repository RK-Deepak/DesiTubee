function formatNumber(input) {
          let number = parseFloat(input);
      
          
      
          if (number >= 1e9) {
              return (number / 1e9).toFixed(2) + 'B';
          } else if (number >= 1e6) {
              return (number / 1e6).toFixed(2) + 'M';
          } else if (number >= 1e3) {
              return (number / 1e3).toFixed(2) + 'k';
          } else {
              return number.toString();
          }
      }
      
     export default formatNumber;
    
     
      