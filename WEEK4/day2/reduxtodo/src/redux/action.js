// action type

export const INC_COUNT="INC_COUNT"

//action creator

export const incCount=(data)=>({
  type:INC_COUNT,
  payload:data,
});