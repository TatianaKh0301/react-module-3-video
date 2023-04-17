import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleDown);
    };

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.addEventListener('keydown', this.handleDown);
    };

    handleDown = e => {
        if (e.code === 'Escape') {
            console.log("Нажали ESC, нужно закрыть модалку");
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className='Modal__backdrop' onClick={this.handleBackdropClick}>
                <div className='Modal__content'>
                    {this.props.children}
                </div>
            </div>, modalRoot
        );
    }
}