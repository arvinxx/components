import React, { Component, PureComponent } from 'react';
import reactCSS from 'reactcss';

const DEFAULT_ARROW_OFFSET = 1;

const UP_KEY_CODE = 38;
const DOWN_KEY_CODE = 40;
const VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
const isValidKeyCode = (keyCode) => VALID_KEY_CODES.indexOf(keyCode) > -1;
const getNumberValue = (value) => Number(String(value).replace(/%/g, ''));

let idCounter = 1;

export class EditableInput extends (PureComponent || Component) {
  constructor(props) {
    super();

    this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase(),
    };

    this.inputId = `rc-editable-input-${idCounter++}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.value !== this.state.value &&
      (prevProps.value !== this.props.value || prevState.value !== this.state.value)
    ) {
      if (this.input === document.activeElement) {
        this.setState({ blurValue: String(this.props.value).toUpperCase() });
      } else {
        this.setState({
          value: String(this.props.value).toUpperCase(),
          blurValue: !this.state.blurValue && String(this.props.value).toUpperCase(),
        });
      }
    }
  }

  getValueObjectWithLabel(value) {
    return {
      [this.props.label]: value,
    };
  }

  handleBlur = () => {
    if (this.state.blurValue) {
      this.setState({ value: this.state.blurValue, blurValue: null });
    }
  };

  handleChange = (e) => {
    this.setUpdatedValue(e.target.value, e);
  };

  getArrowOffset() {
    return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
  }

  handleKeyDown = (e) => {
    // In case `e.target.value` is a percentage remove the `%` character
    // and update accordingly with a percentage
    // https://github.com/casesandberg/react-color/issues/383
    const value = getNumberValue(e.target.value);
    if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
      const offset = this.getArrowOffset();
      const updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;

      this.setUpdatedValue(updatedValue, e);
    }
  };

  setUpdatedValue(value, e) {
    const onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
    this.props.onChange && this.props.onChange(onChangeValue, e);

    this.setState({ value });
  }

  render() {
    const styles = reactCSS({
      default: {
        wrap: {
          position: 'relative',
        },
        input: {
          width: '100%',
          padding: '2px 3px',
          border: 'none',
          borderRadius: '4px',
          boxShadow: 'inset 0 0 0 1px #ccc',
          fontSize: '12px',
        },
      },
    });

    return (
      <div style={styles.wrap}>
        <input
          id={this.inputId}
          style={styles.input}
          ref={(input) => (this.input = input)}
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder}
          spellCheck="false"
        />
      </div>
    );
  }
}

export default EditableInput;
