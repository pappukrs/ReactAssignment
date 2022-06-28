
//action type
export const INC_COUNT="INC_COUNT";
export const DEC_COUNT="DEC_COUNT";
export const RESET_COUNT="RESET_COUNT";
export const ADD_TODO="ADD_TODO"
//action creators
export const incCount=(data)=>({

    type:INC_COUNT,
    payload:data,
});

export const decCount=(data)=>({

    type:DEC_COUNT,
    payload:data,
});

export const resetCount=()=>({

    type:RESET_COUNT,
    
});

export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload
})