import React, { Component, PropTypes } from 'react';
import { observer, observable } from 'mobx';

import TextField from 'material-ui/TextField';

const defaultStyle = {
  marginLeft: 20,
};

@observer(['patientStore'])
class PatientSearch extends Component {
  @observable text = '';

  handleEnter = (e) => {
    if (e.keyCode === 13) { // on enter
      const text = e.target.value.trim();
      this.props.patientStore.search(text);
      this.text = '';
    }
  }

  handleChange = (e) => {
    this.text = e.target.value;
  }

  handleBlur = (e) => {
    this.props.patientStore.search(e.target.value);
  }

  render() {
    return (
      <TextField
        type="text"
        style={defaultStyle}
        hintText={this.props.placeholder}
        autoFocus="true"
        value={this.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

PatientSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  patientStore: PropTypes.object.isRequired,
};

export default PatientSearch;
