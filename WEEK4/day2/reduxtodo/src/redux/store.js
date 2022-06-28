import {legacy_createStore as createStore } from "redux"
import {reducer} from './reducer';

export const store=createStore(reducer,{count:1})
console.log(store)
console.log(store.subscribe(()=>{
    console.log("store state has changed"+store.getState().count);
}))

