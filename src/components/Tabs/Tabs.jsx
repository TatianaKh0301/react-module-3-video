import { Component } from "react";


export class Tabs extends Component {
    state = {
        activeTabIndex: 0,
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeTabIndex !==this.state.activeTabIndex;
    };

    setActiveTabIndex = index => {
        this.setState({activeTabIndex: index});
    };

    render() {
        const { activeTabIndex } = this.state;
        const { items } = this.props;
        const activeTab = items[activeTabIndex];

        return(
            <>
                <div>
                    {items.map((item, index) => (
                        <button 
                            type="button"
                            key={item.label}
                            onClick={() => this.setActiveTabIndex(index)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <h2>{activeTab.label}</h2>
                    <p>{activeTab.content}</p>
                </div>
            </>
        );
    }
}