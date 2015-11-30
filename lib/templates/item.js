import React from 'react';
import AppStore from 'store/appStore';
import AppActions from 'actions/appActions';

import Headline from 'components/headline';

import ListenerMixin from 'alt/mixins/ListenerMixin';

export default React.createClass({
  displayName: 'Item',
  mixins: [ListenerMixin],
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    items: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    displayed: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return AppStore.getState();
  },

  componentDidMount() {
    // this.SVGContainer = document.getElementById('svg-container');
    // this.renderSVG();
    return AppStore.listen(this.onChange);
  },

  componentWillReceiveProps() {
    // AppActions.isHidden();
    // this.SVGContainer.removeChild(this.SVGContainer.childNodes[0]);
    // this.renderSVG();
  },

  // renderSVG() {
  //   const {id}: string = this.context.router.getCurrentParams();
  //   this.item = this.props.items[id];

  //   this.SVGInstance = new Vivus(this.SVGContainer, {type: 'delayed', duration: 100, file: this.item.url}, this.showText);
  // },

  onChange(state) {
    this.setState(this.getInitialState());
  },

  showText() {
    return AppActions.isDisplayed();
  },

  // replaySVG() {
  //   this.SVGInstance.reset();

  //   this.SVGInstance.play(1);
  // },

  render() {
    let item = this.props.items[this.props.params.id];

    // let displayClass = this.state.displayed ? 'show' : 'hide';
    // displayClass = displayClass + ' canvas-text message';

    return (
      <div className="item">
        <div id="image-container"></div>
        <Headline item={item}/>
      </div>
    );
  }
});
