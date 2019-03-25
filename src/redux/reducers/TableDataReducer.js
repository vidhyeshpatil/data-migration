import { 
    SOURCE_TABLE_SUCCESS, 
    SOURCE_TABLE_FAILURE, 
    DESTINATION_TABLE_SUCCESS,
    DESTINATION_TABLE_FAILURE,
    MAP_DATA,
    SAVE_DATA_SUCCESS,
    SAVE_DATA_FAILURE
} from "../actions/actionTypes";
import common from "../../common/common";

const initialState = {
   sourceTableData: undefined,
   sourceTableList: undefined,
   destTableData: undefined,
   destTableList: undefined,
   mappedObj: {}
};

const tableDataReducer = function(state = initialState, action) {
    switch(action.type) {
        
        case SOURCE_TABLE_SUCCESS:
            return {
                ...state,
                sourceTableData: action.payload,
                sourceTableList: common.createDrpDwnData(action.payload)
            };
        case SOURCE_TABLE_FAILURE:
            return {
                ...state,
                sourceTableData: undefined,
                sourceTableList: undefined
            };
        case DESTINATION_TABLE_SUCCESS:
            return {
                ...state,
                destTableData: action.payload,
                destTableList: common.createDrpDwnData(action.payload)
            };
        case DESTINATION_TABLE_FAILURE:
            return {
                ...state,
                destTableData: undefined,
                destTableList: undefined
            };
        case MAP_DATA:
            // not checked for null condition
            // to check null condition will loop source table data & change if we find "null"
            let data = action.payload,
                mapped_dest_column = data.mapped_dest_column,
                curr_source_column = data.curr_source_column,
                sourceTableSelected = data.sourceTableSelected,
                pair = {[mapped_dest_column]: state.sourceTableData[sourceTableSelected][curr_source_column]},
                obj = {...state.mappedObj, ...pair};

            return {
                ...state,
                mappedObj: obj
            };
        case SAVE_DATA_SUCCESS:
            alert("Data Saved Successfully");
            return {
                ...state,
            };
        case SAVE_DATA_FAILURE:
            alert("Unknown Error while saving data");
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default tableDataReducer;