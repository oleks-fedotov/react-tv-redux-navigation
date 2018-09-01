import { APPLICATION_START } from './state/actions';
import React, { Component } from 'react';
import './App.css';
import Rows from './components/Layout/Rows';
import Columns from './components/Layout/Columns';
import Scroll from './components/Layout/Scroll';
import Widget from './components/Content/Widget';
import { Provider } from 'react-redux';
import store from './state/index';

class App extends Component {
    componentWillMount() {
        store.dispatch({ type: APPLICATION_START });
    }

    getWidgetsForRow = (rowKey) => (numberOfWidgets) => (
        Array(numberOfWidgets)
            .fill(0)
            .map((_, index) => (
                <Widget key={`widget-${rowKey}-${index}`}>{rowKey}-{index + 1}</Widget>
            ))
    );

    render() {
        return (
            <Provider store={store}>
                <Scroll>
                    <Rows id="rows-navigation" elementClassName="row">
                        <Columns
                            key="columns-1"
                            withScroll
                            id="columns-1"
                            focusedIndex={0}
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('1')(20)}
                        </Columns>
                        <Columns
                            key="columns-2"
                            withScroll
                            id="columns-2"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('2')(10)}
                        </Columns>
                        <Columns
                            key="columns-3"
                            withScroll
                            id="columns-3"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('3')(10)}
                        </Columns>
                        <Columns
                            key="columns-4"
                            withScroll
                            id="columns-4"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('4')(10)}
                        </Columns>
                        <Columns
                            key="columns-5"
                            withScroll
                            id="columns-5"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('5')(10)}
                        </Columns>
                        <Columns
                            key="columns-6"
                            withScroll
                            id="columns-6"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('6')(10)}
                        </Columns>
                        <Columns
                            key="columns-7"
                            withScroll
                            id="columns-7"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('7')(10)}
                        </Columns>
                        <Columns
                            key="columns-8"
                            withScroll
                            id="columns-8"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('8')(10)}
                        </Columns>
                        <Columns
                            key="columns-9"
                            withScroll
                            id="columns-9"
                            elementClassName="row-item"
                        >
                            {this.getWidgetsForRow('9')(10)}
                        </Columns>
                    </Rows>
                </Scroll>
            </Provider>
        );
    }
}

export default App;
