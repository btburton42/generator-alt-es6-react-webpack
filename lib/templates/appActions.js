import alt from '../utils/alt';

class AppActions {
  constructor() {
    this.generateActions(
      'addSugar',
      'removeHotSauce'
    );
  }
}

export default alt.createActions(AppActions);
