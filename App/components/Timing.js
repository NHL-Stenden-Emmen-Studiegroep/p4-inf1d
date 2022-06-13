import { TouchableHighlightBase } from 'react-native';
import { Settings } from 'react-native';
import Play from '../buttons/play';
import TimerText from './TimerText';

export class Timer {
  static #started = false;
  static #i = 1;
  static #timer;
  static ready = false;

  static #focus = Settings['focus-time'];
  static #time = Settings['focus-time'];
  static #lBreak = Settings['long-breaks'];
  static #sBreak = Settings['short-breaks'];
  static #break = false;
  static #totalIntervals = Settings.intervals;
  static #intervals = Settings.intervals;

  static setup(focus = null, lBreak = null, sBreak = null, intervals = null, reset = false, setTime = undefined) {
    if (reset) {
      this.#focus = focus;
      this.#time = focus;
      this.#lBreak = lBreak;
      this.#sBreak = sBreak;
      this.#totalIntervals = intervals;
      this.#intervals = intervals;
      this.#i = 1;
      this.#started = false;
      this.ready = false;
      this.#break = false;
      clearInterval(this.#timer);
      if (typeof setTime === 'function') {
        setTime(this.#time * 60);
      }
    }

    if (!this.ready) {
      if (this.#intervals > 0) {
        if (this.#break) {
          this.#time = this.#sBreak;
        } else {
          this.#intervals--;
          this.#time = this.#focus;
          this.#break = true;
        }
      } else {
        this.#intervals = this.#totalIntervals;
        this.#time = this.#lBreak;
      }
      this.#i = 1;
      this.ready = true;
    }
  }

  static reset(setTime) {
    this.setup(this.#focus, this.#lBreak, this.#sBreak, this.#intervals, true, setTime);
  }

  static start(setTime, setPause) {
    if (this.ready === false) {
      this.setup();
    }

    if (this.#started !== true && this.ready === true) {
      this.#started = true;
      this.#timer = setInterval(() => {
        setTime(this.#time * 60 - this.#i);
        if (this.#i++ === this.#time * 60) {
          clearInterval(this.#timer);
          this.#started = false;
          this.ready = false;
          this.setup();
          setTimeout(() => {
            setTime(this.#time * 60);
            setPause(false);
          }, 2000);
        }
      }, 1000);
    } else {
      this.#started = false;
      clearInterval(this.#timer);
    }
    return;
  }
}

const timing = (setTime, setPause) => {
  Timer.start(setTime, setPause);
  return;
};

export default timing;
