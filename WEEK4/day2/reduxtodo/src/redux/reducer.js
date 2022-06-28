import{INC_COUNT} from './action.js'

export const reducer=(store,action)=>{


    switch(action.type){

        case INC_COUNT:

            return {
                ...store,
                count:store.count+action.payload,
              }
             
        default :
            return store;
    }
};