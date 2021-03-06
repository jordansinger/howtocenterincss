/** @flow */

var React = require('react');
var Options = require('../how/Options');
var LengthComponent = require('./LengthComponent');
var RadioComponent = require('./RadioComponent');
var RadioListComponent = require('./RadioListComponent');

class DivSizeComponent extends React.Component {
  _width: LengthComponent;
  _height: LengthComponent;

  getWidth(): ?Options.Length {
    return this._width.getLength();
  }

  getHeight(): ?Options.Length {
    return this._height.getLength();
  }

  _handleWidthKnown(known) {
    if (!known) {
      if (this.props.onWidthChange) {
        this.props.onWidthChange(null);
      }
      this._width.clear();
    }
  }

  _handleHeightKnown(known) {
    if (!known) {
      if (this.props.onHeightChange) {
        this.props.onHeightChange(null);
      }
      this._height.clear();
    }
  }

	render(): ?ReactElement {
    return (
      <div>
        <h3>Width</h3>
        <RadioListComponent onChange={this._handleWidthKnown.bind(this)}>
          <RadioComponent labelText="Known" value={true}>
            <LengthComponent
              onChange={this.props.onWidthChange}
              ref={(c) => this._width = c}
            />
          </RadioComponent>
          <RadioComponent labelText="Unknown" value={false}>
            The width is not known until runtime, or needs to be set dynamically.
          </RadioComponent>
        </RadioListComponent>

        <h3>Height</h3>
        <RadioListComponent onChange={this._handleHeightKnown.bind(this)}>
          <RadioComponent labelText="Known" value={true}>
            <LengthComponent
              onChange={this.props.onHeightChange}
              ref={(c) => this._height = c}
            />
          </RadioComponent>
          <RadioComponent labelText="Unknown" value={false}>
            The height is not known until runtime, or needs to be set dynamically.
          </RadioComponent>
        </RadioListComponent>
      </div>
    );
	}
}
DivSizeComponent.propTypes = {
  onWidthChange: React.PropTypes.func,
  onHeightChange: React.PropTypes.func,
};

module.exports = DivSizeComponent;
