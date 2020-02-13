<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout>
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
          <Span class="fa" text.decode="&#xf135;"/>
          <Span :text="message"/>
      </Label>
      <LottieView src="AndroidWave.json"  loop="true" autoPlay="true" backgroundColor="red" horizontalAlignment="center"></LottieView>
      <LottieView src="~/assets/Mobilo/N"  loop="true" autoPlay="true" backgroundColor="green" horizontalAlignment="center"></LottieView>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return 'Lottie {N}-Vue Demo App';
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
