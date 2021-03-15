import React from 'react';

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modal: true
    });
  }

  closeModal() {
    this.setState({
      modal: false
    });
  }

  render() {
    window.addEventListener('resize', () => {
      const { modal } = this.state;
      if (modal) {
        this.closeModal();
      }
    });

    const { modal } = this.state;
    let navModal;
    if (modal) {
      navModal =
        <div className='position-fixed top-0 end-0 w-100 vh-100 bg-dark opacity-9 slide'>
          <div className='container-fluid text-white'>
            <div className='row py-4'>
              <div onClick={this.closeModal} className='w-auto'>
                <i className='fas fa-times f-size-icon'></i>
              </div>
            </div>
            <div className='ps-4 f-style-teko f-size-modal f-letter-spacing-1'>
              <div className='row'>
                <a
                  href='#services'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>Services</a>
              </div>
              <div className='row'>
                <a
                  href='#blog'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>Blog</a>
              </div>
              <div className='row'>
                <a
                  href='#about-us'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>About Us</a>
              </div>
              <div className='row'>
                <a
                  href='#contact-us'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>Contact Us</a>
              </div>
              <div className='row'>
                <a
                  target='_blank'
                  href='https://www.tasksuite.com/'
                  rel='noreferrer'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>CRM</a>
              </div>
              <div className='row'>
                <a
                  target='_blank'
                  href='https://www.taskloan.com/'
                  rel='noreferrer'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>Leading Software</a>
              </div>
              <div className='row'>
                <a
                  href='#partners'
                  onClick={this.closeModal}
                  className='text-decoration-none text-reset w-auto'>Partners</a>
              </div>
            </div>
          </div>
        </div>;
    }

    return (
      <>
        <div className='pe-2' onClick={this.openModal}>
          <i className='fas fa-bars f-size-icon'></i>
        </div>
        {navModal}
      </>
    );
  }
}
