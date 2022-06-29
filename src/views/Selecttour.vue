<template>
  <ion-page>
    <ion-header class="header" mode="ios">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title class="text-light ion-padding-center">Touring Packge </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-searchbar mode="ios" placeholder="ค้นหาแพคเกจทัวร์"></ion-searchbar>
      <div style="margin-top: -12px;">
        <ion-card>
          <ion-card-content color="tertiary">
            <div class="ion-no-margin">
              <ion-list v-for="p in pack" :key="p.image">
                <ion-card color="tertiary" class="ion-no-padding border-radius">
                  <ion-img :src="p.image"></ion-img>
                  <ion-grid>
                    <ion-row>
                      <ion-col size="7">
                        <ion-label>
                          <h2><b>{{ p.englishname }}</b></h2>
                          <h3>{{ p.thainame }}</h3>
                        </ion-label>
                      </ion-col>
                      <ion-col size="5">
                        <ion-label>
                          <h3 class="ion-text-right">
                            <ion-text color="danger">
                              <h2>
                                {{ p.price }}<small>&nbsp;THB</small><span>/คน</span>
                              </h2>
                            </ion-text>
                            <ion-text color="medium">
                              ราคารวมภาษีแล้ว
                            </ion-text>
                          </h3>
                        </ion-label>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                  <ion-card-content style="text-align: left;">
                    <ion-icon name="bus-outline"></ion-icon>&nbsp;{{ p.icon1 }}<br>
                    <ion-icon name="fast-food-outline"></ion-icon>&nbsp;{{ p.icon3 }}<br>
                    <ion-icon name="bed-outline"></ion-icon>&nbsp;{{ p.icon2 }}<br>
                  </ion-card-content>
                  <ion-button color="danger" class="ion-no-margin" expand="full" @click="() => router.push('/detailtour')">
                    เลือก
                  </ion-button>
                </ion-card>
                <br>
              </ion-list>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonSearchbar,
  IonCardContent,
  IonText,
  IonList,
  IonButton,
  IonLabel,
  IonImg
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from "vue-router";
import { packages } from '../mocks/tourPackage';

export default defineComponent({
  name: 'SelectTour',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonIcon,
    IonCol,
    IonGrid,
    IonRow,
    IonSearchbar,
    IonCardContent,
    IonText,
    IonList,
    IonButton,
    IonLabel,
    IonImg
  },
  setup() {
    const router = useRouter();
    const pack = packages
    return {
      router,
      pack
    }
  }
});
</script>

<style>
.cardpromo {
  height: 300px;
}

.imgpromo {
  height: 220px;
}

ion-searchbar {
  margin: auto;
  width: 100%;
  border-radius: 1px;
}
</style>