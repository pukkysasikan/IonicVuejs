<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="danger">
        <ion-title>Mana Dashboard
          <ion-fab horizontal="end">
            <ion-fab-button class="fab-small" size="small" id="alignment-button">
              <ion-icon name="notifications"></ion-icon>
            </ion-fab-button>
            <ion-popover trigger="alignment-button" :dismissOnSelect="true">
              <ng-template>
                <ion-content>
                  <ion-list>
                    <ion-item lines="full" :button="true" :detail="true" id="nested-trigger">
                      <ion-label>การชำระเงินสำเร็จ</ion-label>
                    </ion-item>
                    <ion-popover trigger="nested-trigger" :dismissOnSelect="true" side="end">
                    </ion-popover>
                    <ion-item lines="none" :button="true" :detail="true" id="nested-trigger">
                      <ion-label>คุณได้ทำการเช่ารถ</ion-label>
                    </ion-item>
                    <ion-popover trigger="nested-trigger" :dismissOnSelect="true" side="end">
                    </ion-popover>
                  </ion-list>
                </ion-content>
              </ng-template>
            </ion-popover>
          </ion-fab>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid class="mygrid" padding>
        <ion-row class="myrow">
          <ion-col class="mycols">
            <div class="myBTNs4" @click="() => router.push('/car')">
              <ion-icon class="largeIcon" name="car-sport" item-start></ion-icon>
              <p class="myHeader">เช่ารถ</p>
            </div>
          </ion-col>
          <ion-col class="mycols1">
            <div class="myBTNs3" @click="() => router.push('/Air-ticket')">
              <ion-icon class="largeIcon" name="airplane" item-start></ion-icon>
              <p class="myHeader">ตั๋วเครื่องบิน</p>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="myrow">
          <ion-col class="mycols">
            <div class="myBTNs" @click="() => router.push('/selecttour')">
              <ion-icon class="largeIcon" name="pricetag" item-start></ion-icon>
              <p class="myHeader">แพคเก็ตทัวร์</p>
            </div>
          </ion-col>
          <ion-col class="mycols1">
            <div class="myBTNs1" @click="() => router.push('/hotelBooking')">
              <ion-icon class="largeIcon" name="business" item-start></ion-icon>
              <p class="myHeader">จองโรงแรม</p>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card>
        <ion-card-content color="tertiary">
          <ion-slides>
            <ion-slide v-for="deal in promo" :key="deal.title">
              <ion-card color="tertiary" class="border-radius cardpromo " @click="() => cautionAlert('Deal Page')">
                <img class="imgpromo" style="height: 220px" v-bind:src="deal.img" />
                <ion-card-header style="padding-top: 5px">
                  <ion-card-subtitle style="font-size: 14px">
                    {{ deal.content }}
                  </ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonGrid,
  IonRow,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonIcon,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Deal } from "../mocks/promotionDeal";

export default defineComponent({
  name: "dashBoard",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonGrid,
    IonRow,
    IonSlides,
    IonSlide,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonIcon,
  },
  data() {
    return {
      promo: [],
    };
  },
  created() {
    this.promo = Deal;
    this.startAlert();
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    async cautionAlert(text) {
      const toast = await toastController.create({
        position: "top",
        message: `${text} not available`,
        icon: "alert-circle",
        duration: 1000,
        mode: "ios"
      });
      return toast.present();
    },
    async startAlert() {
      const toast = await toastController.create({
        position: "top",
        message: `This app use Vue framework`,
        icon: "information-circle",
        duration: 2000,
        mode: "ios"
      });
      return toast.present();
    },
  },
});
</script>

<style>
.logouticon {
  margin-left: 9px;
}

.card-slide {
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.25);
}

.headerImg {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: -2rem;
}

.toolbar-background-md {
  border-color: #000 8;
  background: #000 8;
}

.item-md {
  border-radius: 13px;
  border: solid 1px #707070 40;
  padding-left: 16px;
  padding-right: 0;
  position: relative;
  font-size: 1.6rem;
  font-weight: normal;
  text-transform: none;
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: none;
  box-shadow: #a6bad3 3d 2px 3px 13px;
  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.bar-button-default-md,
.bar-button-clear-md-default,
.bar-button-md-default {
  color: #2a80b9;
  background-color: transparent;
}

.col {
  padding: 1px;
}

.mygrid {
  padding-top: 35px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}

.myrow {
  padding-left: 18px;
  padding-right: 55px;
}

.myBTNs {
  background: #9e9e9e;
  color: white;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myBTNs4 {
  background: #ec1c24;
  color: white;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.largeIcon {
  padding-top: 8%;
  padding-left: 12px;
  font-size: 25px;
}

.myHeader {
  position: relative;
  position: relative;
  margin-top: 7px;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 12px;
  padding-bottom: 22%;
  padding-top: 6px;
}

.myBTNs1 {
  background: #ec1c24;
  color: white;
  position: relative;
  left: 35px;
  margin: 2px;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myBTNs3 {
  background: #9e9e9e;
  color: white;
  position: relative;
  left: 35px;
  margin: 2px;
  border-radius: 6px;
  box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
  -webkit-box-shadow: 0px 4px 28px 2px rgba(0, 0, 0, 0.20);
}

.myDiv {
  width: 100%;
  text-align: center;
}

.cardpromo {
  height: 300px;
}
</style>