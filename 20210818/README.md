# Conditions

## 1. if-else

```js
if( condition ){
    //condition body
}else{
    //else body
}
```

## 2. ternar statement
```js
condition ? /* condition body */ : /* else body */

const left = summ >= 0 ? summ : 0; 
```

## 3. Switch
```js
const variable = 2;
switch(variable){
    'NM-MKM' :
    'MKM-MM' :  
    'MM-CM' :  
    'CM-DM' :  
    'DM-M' : {
        console.log(value * 0.1);
        break;
    }
    2 : {
        console.log(2);
        // break;
    }
    3 : {
        console.log(3);
        break;
    }
    4 : {
        console.log(4);
        break;
    }

}


//Fluid break usage
//if divide by 5
//if divide by 7
//if divide by 11

const num = 1243243;

switch(true){
    num % 5 == 0 : {
        //body
        break;
    }
    num % 7 == 0 : {
        //body
        break;
    }
    num % 11 == 0 : {
        //body
        break;
    }
}
```

object like switch analog
```js
const vocab = {
    'X' : 10,
    'V' : 5,
    'I' : 1
}
```