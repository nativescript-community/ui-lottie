/**********************************************************************************
* (c) 2017, Brad Martin.
* Licensed under the MIT license.
*
* Version 1.0.0                                           bradwaynemartin@gmail.com
**********************************************************************************/
"use strict";

import { View } from "ui/core/view";
import * as app from "application";
import * as fs from "file-system";


declare var com: any;
declare var android: any;
declare var org: any;

const appPath: string = fs.knownFolders.currentApp().path;
const LottieAnimationView: any = com.airbnb.lottie.LottieAnimationView;
const LottieComposition: any = com.airbnb.lottie.model.LottieComposition;
const JSONObject: any = org.json.JSONObject;

export class LottieView extends View {
  private _src: string;
  private _android: com.airbnb.lottie.LottieAnimationView;
  constructor() {
    super();
  }


  get android(): com.airbnb.lottie.LottieAnimationView {
    return this._android;
  }

  get _nativeView() {
    return this._android;
  }

  get src() {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }

  get loop() {
    return this.loop;
  }


  public _createUI() {
    this._android = new LottieAnimationView(this._context);

    // console.log(`lottieAnimationView: ${this._android}`);

    try {
      // let composition = LottieComposition.fromJson(android.content.Context.getResources(), )
      // console.log(this.jsonFile);

      let src = appPath + (this._src.indexOf("/") === 0 ? "" : "/") + this._src;
      if (!fs.File.exists(src)) {
        console.log("Keyframe source not found at " + src + "; showing an empty image");
        return;
      }
      console.log(src);

      // let loopIt: boolean = this.loop ? true : false;
      // this._android.setAnimation(src);


      let composition = LottieComposition.fromJson(app.android.context.getResources(), )

      this._android.loop(this.loop);

    } catch (err) {
      console.log(err);
    }

  }


}
