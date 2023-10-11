import { Component } from 'react';
import modal from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };
  handleClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.onToggle();
    }
  };
  render() {
    const { img, alt } = this.props;
    return (
      <div className={modal.overlay} onClick={this.handleClick}>
        <div >
          <img className={modal.modalImage}src={img} alt={alt} />
        </div>
      </div>
    );
  }
}