// import Modal from 'components/Modal';
import { Component } from 'react';
import { Tabs } from 'components/Tabs';
import items from "components/Tabs/data.json";

export class App extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    }

    render() {
        // const { showModal } = this.state;
        return (
            <div>
                {/* <button type='button' onClick={this.toggleModal}>Open modal</button>
                {showModal &&   <Modal onClose={this.toggleModal}>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem rem harum maiores. Officia, qui ipsam dolor voluptate eos beatae laudantium sapiente minima modi numquam autem sequi nostrum odio nulla ratione. Officia eveniet nemo et tenetur, laborum, provident fugiat alias natus ipsam quia repellendus quibusdam iusto. Iure reiciendis itaque numquam laudantium?
                                    </p>
                                    <button type='button' onClick={this.toggleModal}>Close modal</button>
                                </Modal>} */}
                <Tabs items={items}/>
            </div>
        );
    }  
};
