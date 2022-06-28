<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Deal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="transaction" mode="ios">
      <div v-for="d in deals" :key="d.img">
        <ion-card>
          <ion-card-content color="tertiary">
            <div class="ion-no-margin">
              <ion-card color="tertiary" class="ion-no-padding border-radius cardpromo"
                routerLink="/tabs/car-promotion">
                <img class="imgpromo" :src="d.img" />
                <ion-card-header style="padding-top: 5px">
                  <ion-card-subtitle style="font-size: 14px; text-align: center; padding-bottom: 2px;">
                    {{ d.content }}
                  </ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>

  </ion-page>
</template>

<script >
import { defineComponent } from 'vue';
import { Deal } from '@/mocks/promotionDeal';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardSubtitle } from '@ionic/vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardHeader, IonCardSubtitle },
  data() {
    return {
      deals: Deal
    }
  }
});
</script>
