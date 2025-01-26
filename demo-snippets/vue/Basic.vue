<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout rows="auto, auto, *">
            <Label class="info" horizontalAlignment="center" verticalAlignment="center"  :text="message" />
            <LottieView row="1" src="~/assets/LottieLogo1.json" loop="true" autoPlay="true" backgroundColor="red" horizontalAlignment="center"></LottieView>
            <ListView row="2" :items="items">
                <v-template>
                    <StackLayout orientation="horizontal" borderRadius="4" backgroundColor="yellow">
                        <Label :text="item.name" />
                        <LottieView width="50" height="50" :src="item.lottie" loop="true" autoPlay="true" backgroundColor="green" horizontalAlignment="right"></LottieView>
                    </StackLayout>
                </v-template>
            </ListView>
        </GridLayout>
    </Page>
</template>

<script>
function generateItems(count, offset = 0) {
    return new Array(count).fill().map((_, i) => ({
        name: `Item ${i}`,
        description: `Item ${i} description`,
        lottie: '~/assets/Mobilo/A.json'
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
//@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
    color: blue;
}

.info {
    font-size: 20;
}
</style>
