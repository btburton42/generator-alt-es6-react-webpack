import alt from 'utils/alt';
import AppActions from 'actions/appActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
  }

  onAddSugar(sugar) {
    this.sugar = sugar;
  }

  onRemoveHotSauce(hotsauce) {
    this.hotsauce = hotsauce;
  }

}

export default alt.createStore(AppStore, 'AppStore');
