import alt from '../utils/alt';

class AppActions {
  constructor() {
    this.generateActions(
      'toggleShuffle',
      'isDisplayed',
      'isHidden'
    );
  }
}

export default alt.createActions(AppActions);
