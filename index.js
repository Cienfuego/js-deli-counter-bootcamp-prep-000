//var currLine = ['bob', 'nancy'];

function takeANumber(arr, name){
  arr.push(name);
  return(`Welcome, ${name}. You are number ${arr.length} in line.`);
}

function currentLine(arr){
  var i; 
  var counter = 1;
  var line = 'The line is currently: '
  var text = '';
  
  if(arr.length === 0){
    return('The line is currently empty.')
  }else{
    for(i = 0; i < arr.length; i++){
      if(i < arr.length -1){
        text = text + counter + '. ' + `${arr[i]}, `
        counter ++
      }else{
        text = text + counter + '. ' + `${arr[i]}`
        counter ++
      }
    }
    line = line + text
  }
  return(line)
}

function nowServing(array){
  var i;
  for(i = 0; i < array.length; i++){
    if(arr.length === 0){
      console.log('There is nobody waiting to be served!');
    }else{
      console.log(`'Currently serving ${array[i]}'`)
      array.pop(array[i]);
    }
  }
}
