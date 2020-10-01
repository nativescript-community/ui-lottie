import {
  Color,
  File,
  knownFolders,
  path,
  profile,
  Utils,
  View
} from '@nativescript/core';
import {
  autoPlayProperty,
  loopProperty,
  LottieViewBase,
  progressProperty,
  renderModeProperty,
  srcProperty
} from './lottie.common';
import { clamp } from './utils';
const appPath = knownFolders.currentApp().path;

let LottieProperty;
let LottieKeyPath;
let LottieValueCallback;
let LottieAnimationView;

const cache = new Map();
function loadLottieJSON(iconSrc) {
  if (!cache.has(iconSrc)) {
    const file = File.fromPath(iconSrc);
    return file.readText().then(r => {
      cache.set(iconSrc, r);
      return r;
    });
  }
  return Promise.resolve(cache.get(iconSrc));
}

export const RenderMode = {
  get AUTOMATIC() {
    return com.airbnb.lottie.RenderMode.AUTOMATIC;
  },
  get HARDWARE() {
    return com.airbnb.lottie.RenderMode.HARDWARE;
  },
  get SOFTWARE() {
    return com.airbnb.lottie.RenderMode.SOFTWARE;
  }
};

export class LottieView extends LottieViewBase {
  nativeView: com.airbnb.lottie.LottieAnimationView;
  animatorListener;
  _completionBlock;

  public createNativeView(): View {
    if (!LottieAnimationView) {
      LottieAnimationView = com.airbnb.lottie.LottieAnimationView;
    }
    return new LottieAnimationView(this._context);
  }

  // @ts-ignore
  get completionBlock() {
    return this._completionBlock;
  }

  set completionBlock(block) {
    this._completionBlock = block;
    if (block) {
      if (!this.animatorListener) {
        this.animatorListener = new android.animation.Animator.AnimatorListener(
          {
            onAnimationCancel: _animator => {
              if (this._completionBlock) {
                this._completionBlock(false);
              }
            },
            onAnimationEnd: _animator => {
              if (this._completionBlock) {
                this._completionBlock(true);
              }
            },
            onAnimationRepeat: _animator => {
              // noop
            },
            onAnimationStart: _animator => {
              // noop
            }
          }
        );
        if (this.nativeView) {
          this.nativeView.addAnimatorListener(this.animatorListener);
        }
      }
    } else if (this.animatorListener) {
      if (this.nativeView) {
        this.nativeView.removeAnimatorListener(this.animatorListener);
      }
      this.animatorListener = null;
    }
  }

  public initNativeView(): void {
    if (this.animatorListener) {
      this.nativeView.addAnimatorListener(this.animatorListener);
    }
  }

  public disposeNativeView(): void {
    if (this.animatorListener) {
      this.nativeView.removeAnimatorListener(this.animatorListener);
    }
    super.disposeNativeView();
  }

  @profile
  setSrc(src: string) {
    // if no src null the view and return
    if (!src) {
      this.nativeView.setAnimation(null);
      return;
    }

    // should be direct JSON being fed into it
    if (src[0] === '{') {
      this.nativeView.setAnimation(src);
    } else if (src.startsWith(Utils.RESOURCE_PREFIX)) {
      let resName = src.replace(Utils.RESOURCE_PREFIX, '');
      // replace resName to end with json if user did not pass .json
      if (!/.(json|zip)$/.test(resName)) {
        resName += '.json';
      }
      this.nativeView.setAnimation(resName);
    } else if (src[0] === '~') {
      src = `${path.join(appPath, src.substring(2))}`;
      if (!/.(json|zip)$/.test(src)) {
        src += '.json';
      }

      loadLottieJSON(src)
        .then(r => {
          this.nativeView.setAnimation(r);
        })
        .catch(err => {
          console.log(
            'Lottie File not found, please be sure to use the correct file path for where your lottie json files are stored.',
            `Error: ${err}`
          );
        });
    } else {
      // at this point we have not found the file with the res:// prefix, direct JSON, or relative file path
      // make one last effort to load it from app_resources directly
      let resName = src.replace(Utils.RESOURCE_PREFIX, '');
      // replace resName to end with json if user did not pass .json
      if (!/.(json|zip)$/.test(resName)) {
        resName += '.json';
      }
      try {
        this.nativeView.setAnimation(resName);
      } catch (error) {
        console.log(
          `Error trying to load the lottie file. The src value: ${src} was not able to load into the LottieView.`
        );
      }
    }

    if (this.autoPlay) {
      this.playAnimation();
    }
  }

  [srcProperty.setNative](src: string) {
    this.setSrc(src);
  }

  [loopProperty.setNative](loop: boolean) {
    this.nativeView.loop(loop);
  }
  [renderModeProperty.setNative](renderMode) {
    this.nativeView.setRenderMode(renderMode);
  }

  [autoPlayProperty.setNative](autoPlay: boolean) {
    if (autoPlay) {
      if (!this.isAnimating()) {
        this.playAnimation();
      }
    } else {
      // disable check for now as isAnimating always returns false
      // if (this.isAnimating()) {
      this.cancelAnimation();
      if (this.progress) {
        this.nativeView.setProgress(this.progress);
      }
      // }
    }
  }

  public setColorValueDelegateForKeyPath(
    value: Color,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() === 'color') {
        keyPath.pop(); // android specifies the property as an enum parameter.
        if (keyPath.length === 0) {
          return;
        }
      }
      const nativeKeyPath: java.lang.String[] = Array.create(
        java.lang.String,
        keyPath.length
      );
      keyPath.forEach((key, index) => {
        nativeKeyPath[index] = new java.lang.String(key);
      });
      if (!LottieProperty) {
        LottieProperty = com.airbnb.lottie.LottieProperty;
      }
      if (!LottieValueCallback) {
        LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
      }

      if (!LottieKeyPath) {
        LottieKeyPath = com.airbnb.lottie.model.KeyPath;
      }
      this.nativeView.addValueCallback(
        new LottieKeyPath(nativeKeyPath),
        LottieProperty.COLOR,
        new LottieValueCallback(new java.lang.Integer(value.android))
      );
    }
  }

  public setOpacityValueDelegateForKeyPath(
    value: number,
    keyPath: string[]
  ): void {
    if (this.nativeView && value && keyPath && keyPath.length) {
      if (keyPath[keyPath.length - 1].toLowerCase() === 'opacity') {
        keyPath.pop();
        if (keyPath.length === 0) {
          return;
        }
      }
      const nativeKeyPath: java.lang.String[] = Array.create(
        java.lang.String,
        keyPath.length
      );
      keyPath.forEach((key, index) => {
        nativeKeyPath[index] = new java.lang.String(key);
      });
      value = clamp(value);
      if (!LottieProperty) {
        LottieProperty = com.airbnb.lottie.LottieProperty;
      }
      if (!LottieValueCallback) {
        LottieValueCallback = com.airbnb.lottie.value.LottieValueCallback;
      }

      if (!LottieKeyPath) {
        LottieKeyPath = com.airbnb.lottie.model.KeyPath;
      }
      this.nativeView.addValueCallback(
        new LottieKeyPath(nativeKeyPath),
        LottieProperty.OPACITY,
        new LottieValueCallback(new java.lang.Integer(value * 100))
      );
    }
  }

  public playAnimation(): void {
    if (this.nativeView) {
      this.nativeView.setMinAndMaxProgress(0, 1);
      this.nativeView.playAnimation();
    }
  }

  public playAnimationFromProgressToProgress(
    startProgress: number,
    endProgress: number
  ): void {
    if (this.nativeView) {
      startProgress = startProgress ? clamp(startProgress) : 0;
      endProgress = endProgress ? clamp(endProgress) : 1;
      this.nativeView.setMinAndMaxProgress(startProgress, endProgress);
      this.nativeView.playAnimation();
    }
  }

  public isAnimating(): boolean {
    return this.nativeView ? this.nativeView.isAnimating() : false;
  }

  [progressProperty.setNative](value: number) {
    this.nativeView.setProgress(value);
  }
  // public set progress(value: number) {
  //     if (this.nativeView && value) {
  //         this.nativeView.setProgress(value);
  //     }
  // }

  // public get progress(): number | undefined {
  //     return this.nativeView ? this.nativeView.getProgress() : undefined;
  // }

  public get speed(): number | undefined {
    return this.nativeView ? this.nativeView.getSpeed() : undefined;
  }

  public set speed(value: number) {
    if (this.nativeView && value) {
      this.nativeView.setSpeed(value);
    }
  }

  public get duration(): number | undefined {
    return this.nativeView ? this.nativeView.getDuration() : undefined;
  }

  public cancelAnimation(): void {
    if (this.nativeView) {
      this.nativeView.cancelAnimation();
    }
  }
}
