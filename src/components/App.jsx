import Modal from 'components/Modal';
import { Component } from 'react';

export class App extends Component {
    state = {
        showModal: false,
    };

    render() {
        return (
            <div>
                  {this.state.showModal && <Modal/>}
            </div>
        );
    }  
};
