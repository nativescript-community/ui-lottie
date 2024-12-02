package com.nativescript.lottie;

import androidx.core.view.ViewCompat;
import android.view.View.MeasureSpec;
import android.graphics.drawable.Drawable;

public class LottieAnimationView extends com.airbnb.lottie.LottieAnimationView {
    private double scaleW = 1;
    private double scaleH = 1;
    
    public LottieAnimationView(android.content.Context context) {
        super(context);
    }

     @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        int width = MeasureSpec.getSize(widthMeasureSpec);
        int widthMode = MeasureSpec.getMode(widthMeasureSpec);

        int height = MeasureSpec.getSize(heightMeasureSpec);
        int heightMode = MeasureSpec.getMode(heightMeasureSpec);

        Drawable drawable = this.getDrawable();
        int measureWidth;
        int measureHeight;
        if (drawable != null) {
            measureWidth = drawable.getIntrinsicWidth();
            measureHeight = drawable.getIntrinsicHeight();
        } else {
            measureWidth = 0;
            measureHeight = 0;
        }

        boolean finiteWidth = widthMode != MeasureSpec.UNSPECIFIED;
        boolean finiteHeight = heightMode != MeasureSpec.UNSPECIFIED;

        if (measureWidth != 0 && measureHeight != 0 && (finiteWidth || finiteHeight)) {
            this.computeScaleFactor(width, height, finiteWidth, finiteHeight, measureWidth, measureHeight);
            int resultW = (int) Math.round(measureWidth * this.scaleW);
            int resultH = (int) Math.round(measureHeight * this.scaleH);

            measureWidth = finiteWidth ? Math.min(resultW, width) : resultW;
            measureHeight = finiteHeight ? Math.min(resultH, height) : resultH;
        }

        measureWidth += this.getPaddingLeft() + this.getPaddingRight();
        measureHeight += this.getPaddingTop() + this.getPaddingBottom();

        measureWidth = Math.max(measureWidth, getSuggestedMinimumWidth());
        measureHeight = Math.max(measureHeight, getSuggestedMinimumHeight());

        int widthSizeAndState = ViewCompat.resolveSizeAndState(measureWidth, widthMeasureSpec, 0);
        int heightSizeAndState = ViewCompat.resolveSizeAndState(measureHeight, heightMeasureSpec, 0);

        this.setMeasuredDimension(widthSizeAndState, heightSizeAndState);
    }

    private void computeScaleFactor(int measureWidth, int measureHeight, boolean widthIsFinite, boolean heightIsFinite, double nativeWidth, double nativeHeight) {

        this.scaleW = 1;
        this.scaleH = 1;

        ScaleType scale = this.getScaleType();
        if ((scale == ScaleType.CENTER_CROP || scale == ScaleType.FIT_CENTER || scale == ScaleType.FIT_XY) &&
                (widthIsFinite || heightIsFinite)) {

            this.scaleW = (nativeWidth > 0) ? measureWidth / nativeWidth : 0d;
            this.scaleH = (nativeHeight > 0) ? measureHeight / nativeHeight : 0d;

            if (!widthIsFinite) {
                this.scaleW = scaleH;
            } else if (!heightIsFinite) {
                this.scaleH = scaleW;
            } else {
                // No infinite dimensions.
                switch (scale) {
                    case FIT_CENTER:
                        this.scaleH = this.scaleW < this.scaleH ? this.scaleW : this.scaleH;
                        this.scaleW = this.scaleH;
                        break;
                    case CENTER_CROP:
                        this.scaleH = this.scaleW > this.scaleH ? this.scaleW : this.scaleH;
                        this.scaleW = this.scaleH;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}