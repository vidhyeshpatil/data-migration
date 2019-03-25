import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/actions";
import DropDown from "../../common/components/DropDown";
import DataMigrationList from "./DataMigrationList";

class DashboardPage extends Component {

    state = {
        sourceTableSelected: undefined,
        destTableSelected: undefined
    }

    componentDidMount() {
        
        // fetch source table data
        this.props.triggerSourceTables();

        // fetch destination table data
        this.props.triggerDestinationTables();
    }

    handleDrpDwnData = (state, options) => {
        this.setState({[state]: options.value});
    }

    render() {
        let { sourceTableList, destTableList } = this.props,
            { sourceTableSelected, destTableSelected } = this.state;
        return (
            <React.Fragment>
                <div className = "dashboard-header">
                    <div className = "title"> Data Migration </div>
                    <a href = '/login' id = 'logout'>Logout</a>
                </div>                
                <div className = "drop-down-parent">
                    <DropDown  
                        DDName = "Source DD"
                        DDPlaceholder = "Select source table"
                        DDValue = {sourceTableSelected}
                        DDOptions = {sourceTableList}
                        handleDrpDwnData = {(options) => this.handleDrpDwnData("sourceTableSelected", options)}
                    />
                    <DropDown
                        DDName = "Destination DD"
                        DDPlaceholder = "Select destination table"
                        DDValue = {destTableSelected}
                        DDOptions = {destTableList}
                        handleDrpDwnData = {(options) => this.handleDrpDwnData("destTableSelected", options)}
                    />
                </div>
                {(sourceTableSelected && destTableSelected) && <DataMigrationList sourceTableSelected = {sourceTableSelected} destTableSelected = {destTableSelected} />}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    let { sourceTableList, destTableList } = state.TableDataReducer;

    return {
        sourceTableList,
        destTableList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);