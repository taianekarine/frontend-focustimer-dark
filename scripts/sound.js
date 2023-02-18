import { Sound, Input } from './elements.js';

Sound.Forest.loop = true;
Sound.Rain.loop = true;
Sound.CoffeeShop.loop = true;
Sound.Fireplace.loop = true;

export const bgAudioForest = () => { 
  Sound.Forest.play()
  Input.Forest.addEventListener(`input`, () => {
    Sound.Forest.volume = Input.Forest.value / 100
  })
};

export const bgAudioRain = () => { 
  Sound.Rain.play() 
  Sound.Rain.volume = Input.Rain.value / 100
};

export const bgAudioCoffeeShop = () => { 
  Sound.CoffeeShop.play() 
  Sound.CoffeeShop.volume = Input.CoffeeShop.value / 100
};

export const bgAudioFireplace = () => { 
  Sound.Fireplace.play() 
  Sound.Fireplace.volume = Input.Fireplace.value / 100
};

export const TimeEnd = () => { Sound.TimeEnd.play() };

export const bgAudioForestStop = () => { Sound.Forest.pause() };
export const bgAudioRainStop = () => { Sound.Rain.pause() };
export const bgAudioCoffeeShopStop = () => { Sound.CoffeeShop.pause() };
export const bgAudioFireplaceStop = () => { Sound.Fireplace.pause() };

