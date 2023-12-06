function getRandomElement(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }
        
       export function generateRandomIndianName() {
          const indianFirstNames = ['Aarav', 'Diya', 'Ishaan', 'Neha', 'Rohan', 'Aisha', 'Vivek', 'Ananya', 'Arjun', 'Kavya'];
          const indianLastNames = ['Patel', 'Sharma', 'Desai', 'Gupta', 'Reddy', 'Singh', 'Mukherjee', 'Kumar', 'Chopra', 'Mehta'];
        
          const firstName = getRandomElement(indianFirstNames);
          const lastName = getRandomElement(indianLastNames);
        
          return `${firstName} ${lastName}`;
        }
        
       
// ------------------

     
     export    const generateRandomShortMessage=()=>{
          const greetings = ['Hello', 'नमस्ते', 'Hi', 'प्रणाम', 'Greetings', 'जय हिन्द'];
          const phrases = ['Have a great day', 'शुभ दिन', 'Stay happy', 'खुश रहें', 'Embrace joy', 'खुशी को अपनाओ'];
          const culturalElements = ['diyas', 'रंगोली', 'sarees', 'बांगड़ी', 'curry', 'करी'];
        
          const greeting = getRandomElement(greetings);
          const phrase = getRandomElement(phrases);
          const culturalElement = getRandomElement(culturalElements);
        
          return `${greeting}! ${phrase}. Enjoy ${culturalElement}!`;
        }
        
        