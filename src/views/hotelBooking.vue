<!--Check In-->
<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Check in Hotel</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content mode="ios">
      <ion-card>
        <ion-card-content color="tertiary">
          <div class="ion-no-margin">
            <ion-list>
              <ion-card color="tertiary" class="ion-no-padding border-radius">
                <div class="ion-no-margin">
                  <ion-searchbar
                    mode="ios"
                    placeholder="โรงแรมใกล้ฉัน"
                  ></ion-searchbar>
                  <ion-accordion-group color="tertiary" mode="ios">
                    <ion-accordion
                      value="start"
                      style="border-bottom: 1px solid #e0e0e0"
                      color="tertiary"
                    >
                      <ion-item slot="header" color="tertiary">
                        <ion-label>วันที่เข้าพัก</ion-label>
                        <ion-note slot="end">{{ date1 }}</ion-note>
                      </ion-item>
                      <ion-datetime
                        id="datetime"
                        slot="content"
                        locale="th-TH"
                        @ionChange="formatDate1($event)"
                        display-format="YYYY-MM-DD"
                      >
                      </ion-datetime>
                    </ion-accordion>
                  </ion-accordion-group>

                  <ion-accordion-group color="tertiary" mode="ios">
                    <ion-accordion
                      value="start"
                      style="border-bottom: 1px solid #e0e0e0"
                      color="tertiary"
                    >
                      <ion-item slot="header" color="tertiary">
                        <ion-label>วันที่ออก</ion-label>
                        <ion-note slot="end">{{ date2 }}</ion-note>
                      </ion-item>
                      <ion-datetime
                        id="datetime"
                        slot="content"
                        locale="th-TH"
                        @ionChange="formatDate2($event)"
                        display-format="YYYY-MM-DD"
                      >
                      </ion-datetime>
                    </ion-accordion>
                  </ion-accordion-group>

                  <ion-item lines="full" color="tertiary">
                    <ion-label>จำนวนผู้เข้าพัก</ion-label>
                    <ion-input placeholder="ระบุจำนวนผู้เข้าพัก"></ion-input>
                  </ion-item>
                  <ion-item lines="full" color="tertiary">
                    <ion-label>จำนวนห้องที่ต้องการเช่าพัก</ion-label>
                    <ion-input placeholder="ระบุจำนวนห้อง"></ion-input>
                  </ion-item>
                  <br />
                  <ion-button
                    color="danger"
                    class="ion-no-margin"
                    expand="full"
                    router-link="/selecthotel"
                    >ค้นหา</ion-button
                  >
                </div>
              </ion-card>
              <br />
            </ion-list>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
  IonDatetime,
  IonNote,
  IonToolbar,
  IonSearchbar,
  IonList,
} from "@ionic/vue";

import moment from "moment";
export default defineComponent({
  name: "CheckIn",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonAccordionGroup,
    IonAccordion,
    IonLabel,
    IonDatetime,
    IonNote,
    IonToolbar,
    IonSearchbar,
    IonList,
  },
  data() {
    return {
      date1: "",
      date2: "",
    };
  },
  created() {
    this.date1 = moment().format("DD/MM/YYYY");
    this.date2 = moment().format("DD/MM/YYYY");
  },
  methods: {
    formatDate1(event) {
      this.date1 = moment(event.target.value).format("DD/MM/YYYY");
    },
    formatDate2(event) {
      this.date2 = moment(event.target.value).format("DD/MM/YYYY");
    },
  },
});
</script>
<style scoped>
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