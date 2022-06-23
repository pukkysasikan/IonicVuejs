<template>
    <ion-page>
        <ion-header mode="ios">
  <ion-toolbar color="danger">
    <ion-buttons slot="start">
      <ion-back-button text="" icon="chevron-back-outline"></ion-back-button>
    </ion-buttons>
    <ion-title>Checkout Ticket</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content mode="ios">
  <ion-card>
    <ion-card-content color="tertiary">
      <div class="ion-no-margin">
        <ion-card color="tertiary" class="ion-no-padding border-radius">
          <ion-list lines="none" v-for="ticket in tlist" :key="ticket.go" routerLink="/cartDialog">
            <ion-card color="tertiary">
              <ion-card-content class="ion-no-padding">
                <div class="ion-text-center ion-padding-top">
                  <ion-avatar
                    slot="start"
                    class="avatar-l center ion-margin-bottom"
                  >
                    <ion-img :src="ticket.img"></ion-img>
                  </ion-avatar>
                  <ion-label class="ion-text-center">
                    <h2><b> {{ ticket.airline }} </b></h2>
                  </ion-label>
                </div>
                <ion-item class="ion-no-padding" color="tertiary" lines="none">
                  <ion-grid class="ion-padding">
                    <ion-label>
                      <h4 class="line-height2">
                        <p>รายละเอียดราคา (เที่ยวบินขาไป)</p>
                        <p>ท่าอากาศยานขอนแก่น > ท่าอากาศยานสุวรรณภูมิ</p>
                        <p>(วันอาทิตย์ 5 มิถุนายน 2022)</p>
                      </h4>
                    </ion-label>
                    <ion-row>
                      <ion-col class="ion-no-padding">
                        <p>{{ ticket.go }} > {{ ticket.to }}</p>
                        <p>ผู้ใหญ่</p>
                        <p>เด็ก</p>
                        <p>ทารก</p>
                        <p>ภาษี</p>
                        <p>ส่วนลด</p>
                        <p style="color: red">รวม</p>
                      </ion-col>
                      <ion-col class="ion-no-padding">
                        <p>฿{{ ticket.price }}</p>
                        <p>x2</p>
                        <p>x1</p>
                        <p>x1</p>
                        <p>.</p>
                        <p>.</p>
                      </ion-col>
                      <ion-col class="ion-no-padding">
                        <p>.</p>
                        <p>฿916</p>
                        <p>฿458</p>
                        <p>฿229</p>
                        <p>฿37</p>
                        <p>฿5</p>
                        <p style="color: red">1,635 บาท</p>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-list>

          <ion-list lines="none" v-for="ticket in tlist" :key="ticket.go" routerLink="/cartDialog">
            <ion-item class="ion-margin-bottom" color="tertiary">
              <ion-label style="font-size: 12px">
                <b> {{ ticket.go }} </b>
                <h2>|</h2>
                <h3>to</h3>
                <h2>|</h2>
                <b> {{ ticket.to }} </b>
              </ion-label>
              <ion-label style="font-size: 10px">
                <ion-text color="medium">
                  <h2>{{ ticket.gtime }}</h2>
                  <h2>|</h2>
                  <b>
                    <ion-icon name="time-outline"></ion-icon> {{ ticket.time }}
                  </b>
                  <h2>|</h2>
                  <h2>{{ ticket.ttime }}</h2>
                </ion-text>
              </ion-label>
              <ion-label>
                <ion-text color="medium">
                  <h2 style="font-size: 9.5px">น้ำหนักสัมภาระ</h2>
                  <h2 style="font-size: 9.5px">ภายในห้องโดยสาร</h2>
                  <h2 style="color: green">{{ ticket.weight }} kg</h2>
                </ion-text>
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list lines="none" v-for="ticket in tlist" :key="ticket.go" routerLink="/cartDialog">
            <ion-card color="tertiary">
              <ion-card-content class="ion-no-padding">
                <div class="ion-text-center ion-padding-top">
                  <ion-avatar
                    slot="start"
                    class="avatar-l center ion-margin-bottom"
                  >
                    <ion-img :src="back_ticket.img"></ion-img>
                  </ion-avatar>
                  <ion-label class="ion-text-center">
                    <h2><b> {{ back_ticket.airline }} </b></h2>
                  </ion-label>
                </div>
                <ion-item class="ion-no-padding" color="tertiary" lines="none">
                  <ion-grid class="ion-padding">
                    <ion-label>
                      <h4 class="line-height2">
                        <p>รายละเอียดราคา (เที่ยวบินขากลับ)</p>
                        <p>ท่าอากาศยานสุวรรณภูมิ > ท่าอากาศยานขอนแก่น</p>
                        <p>(วันศุกร์ 10 มิถุนายน 2022)</p>
                      </h4>
                    </ion-label>
                    <ion-row>
                      <ion-col class="ion-no-padding">
                        <p>{{ back_ticket.go }} > {{ back_ticket.to }}</p>
                        <p>ผู้ใหญ่</p>
                        <p>เด็ก</p>
                        <p>ทารก</p>
                        <p>ภาษี</p>
                        <p>ส่วนลด</p>
                        <p style="color: red">รวม</p>
                      </ion-col>
                      <ion-col class="ion-no-padding">
                        <p>฿{{ back_ticket.price }}</p>
                        <p>x2</p>
                        <p>x1</p>
                        <p>x1</p>
                        <p>.</p>
                        <p>.</p>
                      </ion-col>
                      <ion-col class="ion-no-padding">
                        <p>.</p>
                        <p>฿1,358</p>
                        <p>฿679</p>
                        <p>฿340</p>
                        <p>฿37</p>
                        <p>฿5</p>
                        <p style="color: red">2,409 บาท</p>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-list>

          <ion-list lines="none" v-for="ticket in tlist" :key="ticket.go" routerLink="/cartDialog">
            <ion-item class="ion-margin-bottom" color="tertiary">
              <ion-label style="font-size: 12px">
                <b> {{ back_ticket.go }} </b>
                <h2>|</h2>
                <h3>to</h3>
                <h2>|</h2>
                <b> {{ back_ticket.to }} </b>
              </ion-label>
              <ion-label style="font-size: 10px">
                <ion-text color="medium">
                  <h2>{{ back_ticket.gtime }}</h2>
                  <h2>|</h2>
                  <b>
                    <ion-icon name="time-outline"></ion-icon> {{
                    back_ticket.time }}
                  </b>
                  <h2>|</h2>
                  <h2>{{ back_ticket.ttime }}</h2>
                </ion-text>
              </ion-label>
              <ion-label>
                <ion-text color="medium">
                  <h2 style="font-size: 9.5px">น้ำหนักสัมภาระ</h2>
                  <h2 style="font-size: 9.5px">ภายในห้องโดยสาร</h2>
                  <h2 style="color: green">{{ back_ticket.weight }} kg</h2>
                </ion-text>
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item lines="full" color="tertiary">
              <ion-text style="color: red"> รวมทั้งหมด 4,044 บาท </ion-text>
            </ion-item>
          </ion-list>

          <ion-button
            color="danger"
            class="ion-no-margin"
            expand="full"
            routerLink="/cart-edit"
            >ชำระเงิน</ion-button
          >
        </ion-card>
      </div>
    </ion-card-content>
  </ion-card>
</ion-content>

    </ion-page>
</template>

<script>
import {
    IonHeader,
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg
} from '@ionic/vue';
import moment from 'moment';
import { tickets } from "../mocks/flightTicket"
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Air-twoway-ticket',
    components: {
        IonHeader,
        IonContent,
        IonPage,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons,
        IonCard,
        IonCardContent,
        IonItem,
        IonLabel,
        IonAvatar,
        IonImg
    },
    data() {
        return {
            tlist: [],
        }
    },
    created() {
        this.tlist = tickets
    },
    methods: {
        segmentChanged(ev) {
            this.segment = ev.detail.value;
        },
        formatDate0(event) {
            this.date0 = moment(event.target.value).format("DD/MM/YYYY");
        },
        formatDate1(event) {
            this.date1 = moment(event.target.value).format("DD/MM/YYYY");
        },
        formatDate2(event) {
            this.date2 = moment(event.target.value).format("DD/MM/YYYY");
        },
        incrementPeople0() {
            if (this.people0 < 5) {
                this.people0++;
            }
        },
        decrementPeople0() {
            if (this.people0 > 0) {
                this.people0--;
            }
        },

        incrementPeople1() {
            if (this.people1 < 5) {
                this.people1++;
            }
        },
        decrementPeople1() {
            if (this.people1 > 0) {
                this.people1--;
            }
        },

        incrementPeople2() {
            if (this.people2 < this.people0) {
                this.people2++;
            }
        },
        decrementPeople2() {
            if (this.people2 > 0) {
                this.people2--;
            }
        },
    }
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
