import {INC_COUNT,DEC_COUNT,RESET_COUNT,ADD_TODO} from './action.js'

 const counterReducer=(store,action)=>{

   switch(action.type){


    case INC_COUNT:
        return{
            ...store,
            count:store.count+action.payload,
        }

        

   case DEC_COUNT:
    return{
        ...store,
        count:store.count-action.payload,
    }

 case RESET_COUNT:
    return{
        ...store,
        count:0,
    }

    case ADD_TODO:
      return {
            ...store,
          todos:[...store.todos,action.payload],
        };

    default :
    return store;
}


}

export default counterReducer;