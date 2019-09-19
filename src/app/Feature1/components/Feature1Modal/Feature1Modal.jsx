require('./Feature1Modal.css');

// Modules
import React  from 'react/addons';

// Sample Personas
import samplePersonas from 'Global/sample-personas.json';

// Global Components
import Modal from 'Global/components/Modal/Modal.jsx';

export default React.createClass({
  
  closeModal() {
    this.props.store.setStoreData({
      feature1Modal: {
        openStatus: false
      }
    }); 
  },

  yolo() {
    this.props.store.setStoreData({
      feature1Modal: { 
        yolo: 'yolo' 
      }
    });
  },
  
  submitBtnClick() {
    this.props.store.someStoreMethod();
    this.closeModal();
  },

  render() {

    var data = this.props.store.data.feature1Modal;

    var createInvoiceModalBody = (
      <div className='Feature1ModalForm'>
        <section>
          <div>{data.hello}</div>
          <div>{data.sup}</div>
          <div>{data.hi}</div>
          {data.yolo ? (<div>{data.yolo}</div>) : null}
          <hr/>
          <button onClick={this.yolo}>YOLO</button>
          <button onClick={this.submitBtnClick}>Submit</button>
        </section>
      </div>
    );

    return (
      <Modal modalTitle='Feature 1'
             modalActions={<button onClick={this.closeModal}>X</button>}
             modalBody={createInvoiceModalBody}/>
    );
  }
});
