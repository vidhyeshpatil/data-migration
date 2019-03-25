import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/actions";
import Button from "../../common/components/Button";

class DataMigrationList extends Component {

    renderSourceColumnList = tableColumns => {
        let sourceColumnList = (tableColumns) && tableColumns;

        return (
            <div className = "source-draggable">
                <span>Drag Source Columns</span>
                {Object.keys(sourceColumnList).map(keys => (
                    <div key = {keys} id = {keys} className = "column-list" 
                        draggable 
                        onDragStart = {(e) => this.onDragStart(e)}> 
                        {keys} 
                    </div>   
                ))}
            </div>
        );
    }

    renderDestColumnList = tableColumns => {
        let destColumnList = (tableColumns) && tableColumns;

        return (
            <div className = "dest-droppable">
                <span>Destination Columns</span>
                {Object.keys(destColumnList).map(keys => (
                    <div key = {keys} id = {keys} className = "column-list"
                        onDrop = {(e) => this.onDrop(e)}
                        onDragOver = {(e) => this.onDragOver(e)}> 
                        {keys} 
                    </div>   
                ))}
            </div>
        );
    }

    setDragData = e => {
        e.dataTransfer.setData("text/plain", e.target.id);
    }

    getDragData = e => {
        
        return e.dataTransfer.getData("text/plain");
    }

    onDragStart = e => {
        this.setDragData(e);
    }

    onDragOver = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    onDrop = e => {
        let { sourceTableSelected } = this.props,
            curr_source_column = this.getDragData(e),
            mapped_dest_column = e.target.id;

        this.props.mapDataInTable({curr_source_column, mapped_dest_column, sourceTableSelected});    
    }

    onSaveData = () => {
        let postObj = {
            [this.props.destTableSelected]: this.props.mappedObj
        }

        this.props.OnSaveData(postObj);
    }

    render() {
        let { sourceTableData, sourceTableSelected, destTableData, destTableSelected } = this.props;
        let isSaveBtnDisable = (Object.keys(this.props.destTableData[destTableSelected]).length !== Object.keys(this.props.mappedObj).length);
        
        return (
            <React.Fragment>
                <div className = "data-migration-list">
                    <div className = "data-migration-top">
                        <div className = "title">Data Migration List</div>
                        <div className = "info">Drag Source Columns to Destination Columns</div>
                    </div>
                    <div className = "data-migration-parent">
                        {this.renderSourceColumnList(sourceTableData[sourceTableSelected])}
                        {this.renderDestColumnList(destTableData[destTableSelected])}
                    </div>
                    <Button type ='button' className = {"button-DP " + (isSaveBtnDisable ? "button-disable" : "")} title ="Save Data" disabled = {isSaveBtnDisable} onClick = {this.onSaveData} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    let { sourceTableData, destTableData, mappedObj} = state.TableDataReducer;

    return {
        sourceTableData,
        destTableData,
        mappedObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DataMigrationList);