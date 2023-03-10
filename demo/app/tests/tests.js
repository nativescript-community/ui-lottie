describe('lottiview class', function() {
  it('can be instantiated', function() {
    var testLottieView;
    var LottieView = require('@nativescript-community/ui-lottie').LottieView;
    if (LottieView) {
      testLottieView = new LottieView();
      console.log('LottieView instance: ' + testLottieView);
    }

    expect(function() {
      return new LottieView();
    }).not.toThrow();

    expect(new LottieView()).toBeDefined();
  });
});
