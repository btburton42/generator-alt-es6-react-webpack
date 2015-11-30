import alt from 'utils/alt';
import AppActions from 'actions/appActions';
import data from 'assets/data.json';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.items = data.items;
    this.splashPage = data.splashpage;
    this.navbar = {
      name: 'NavBar'
    };
    this.displayed = false;
    this.shuffle = true;
  }

  onIsDisplayed() {
    this.displayed = true;
  }

  onIsHidden() {
    this.displayed = false;
  }

  onToggleShuffle() {
    let shuffle = this.shuffle ? false : true;
    this.shuffle = shuffle;
  }

}

export default alt.createStore(AppStore, 'AppStore');
