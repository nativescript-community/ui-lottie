<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <StackLayout>
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <Span class="fa" text.decode="&#xf135;" />
                <Span :text="message" />
            </Label>
            <LottieView src="AndroidWave.json" loop="true" autoPlay="true" backgroundColor="red" horizontalAlignment="center"></LottieView>
            <ListView :items="items">
                <v-template>
                    <StackLayout orientation="horizontal" borderRadius="4" backgroundColor="yellow">
                        <Label :text="item.name" />
                        <LottieView width="50" height="50" :src="item.lottie" loop="true" autoPlay="true" backgroundColor="green" horizontalAlignment="right"></LottieView>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
function generateItems(count, offset = 0) {
    return new Array(count).fill().map((_, i) => ({
        name: `Item ${i}`,
        description: `Item ${i} description`,
        lottie: '~/assets/LottieLogo1.json'
    }));
}

export default {
    data() {
        return {
            items: generateItems(50)
        };
    },
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
    color: blue;
}

.info {
    font-size: 20;
}
</style>
