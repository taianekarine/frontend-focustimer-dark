import { ToggleCardForest, ToggleCardRain, ToggleCardCoffeeShop, ToggleCardFireplace } from './events.js';
import { bgAudioForest, bgAudioRain, bgAudioCoffeeShop, bgAudioFireplace, bgAudioForestStop, bgAudioRainStop, bgAudioCoffeeShopStop, bgAudioFireplaceStop } from './sound.js'

export const ForestCard = () => {
  ToggleCardForest()
  bgAudioForest()

  bgAudioRainStop() 
  bgAudioCoffeeShopStop() 
  bgAudioFireplaceStop()
};

export const RainCard = () => {
  ToggleCardRain()
  bgAudioRain()

  bgAudioForestStop() 
  bgAudioCoffeeShopStop() 
  bgAudioFireplaceStop()
};

export const CoffeeShopCard = () => {
  ToggleCardCoffeeShop()
  bgAudioCoffeeShop()

  bgAudioForestStop() 
  bgAudioRainStop() 
  bgAudioFireplaceStop()
};

export const FireplaceCard = () => {
  ToggleCardFireplace()
  bgAudioFireplace()

  bgAudioForestStop() 
  bgAudioRainStop() 
  bgAudioCoffeeShopStop() 

};