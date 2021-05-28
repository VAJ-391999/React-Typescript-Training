import * as actionTypes from '../actions/actionType';
import axios from '../../axios-orders';
import { updateOject } from '../../shared/utility';

export const addIngrediant = (name: string): {type: string, ingrediantName:string} =>{
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingrediantName: name
    };
};

export const removeIngrediant = (name: string): {type: string, ingrediantName:string} =>{
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingrediantName: name
    };
};

export const setIngrediants = (ingrediants) => {
    return {
        type: actionTypes.SET_INGREDIANTS,
        ingrediants: ingrediants
    };
};

export const fatchIngrediantsFailed = (): {type: string} => {
    return {
        type: actionTypes.FATCH_INGREDIANS_FAILED, 
    };
};

export const initIngrediants = (): {type: string} => {
    return {
        type: actionTypes.INIT_INGREDIANTS
    }
};