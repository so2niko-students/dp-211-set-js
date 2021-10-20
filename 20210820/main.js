const dots = [  [2,2],  
                    [2,8],
                    [5,5],
                    [6,3],
                    [6,7],
                    [7,4],
                    [7,8]   ];

const findClosest = dots => { 
     let distance = Infinity; 
     let result = []; 
     for(let i = 0; i < dots.length - 1; i += 1){ 
         for(let j = i + 1; j < dots.length; j += 1){ 
             const a = Math.pow(dots[i][0] - dots[j][0], 2);
             const b = Math.pow(dots[i][1] - dots[j][1], 2); 
             const x = Math.sqrt(a + b); 
             if(distance > x){ 
                 distance = x; 
                 result = [dots[i], dots[j]];                  
             } 
         } 
     } 
     return result; 
}

const closestDots = findClosest(dots);
console.log(closestDots);