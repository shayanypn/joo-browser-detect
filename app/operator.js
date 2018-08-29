'use stric';

export default function Operator(paramA, paramB, operation){
  console.log(paramA, paramB, operation);
  let result;
  switch(operation){
    case '&&':
      result = (paramA && paramB);
      break;
    case '||':
      result = (paramA || paramB);
      break;
    case '==':
      result = (paramA === paramB);
      break;
    case '===':
      result = (paramA === paramB);
      break;
    case '!=':
      result = (paramA !== paramB);
      break;
    case '>':
      result = (paramA > paramB);
      break;
    case '>=':
      result = (paramA >= paramB);
      break;
    case '<':
      result = (paramA < paramB);
      break;
    case '<=':
      result = (paramA <= paramB);
      break;
    default:
      result = paramA ? true : false;
      break;
  }
  return result;
}
