<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Air Flight Ticket</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-content color="tertiary">
          <div class="ion-no-margin border-radius">
            <ion-segment mode="md" style="
            background: white;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          " @ionChange="segmentChanged($event)" v-model="segment">
              <ion-segment-button value="one">
                <ion-label> เที่ยวเดียว </ion-label>
              </ion-segment-button>
              <ion-segment-button value="two">
                <ion-label> ไป-กลับ </ion-label>
              </ion-segment-button>
            </ion-segment>

            <div class="animate__animated animate__slideInUp animate__fast" v-if="segment === 'one'">
              <ion-list style="
              background: white;
              border-bottom-right-radius: 10px;
              border-bottom-left-radius: 10px;
            " class="animate__animated animate__slideInUp animate__fast ion-no-padding">
                <ion-item lines="full" color="tertiary">
                  <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" mode="ios"
                    cancelText="ยกเลิก" interface="action-sheet" placeholder="เดินทางจาก">
                    <ion-select-option value="BKK">ท่าอากาศยานสุวรรณภูมิ</ion-select-option>
                    <ion-select-option value="DMK">ท่าอากาศยานดอนเมือง</ion-select-option>
                    <ion-select-option value="Chiangrai">ท่าอากาศยานแม่ฟ้าหลวง</ion-select-option>
                    <ion-select-option value="HGN">ท่าอากาศยานแม่ฮ่องสอน</ion-select-option>
                    <ion-select-option value="CNX">ท่าอากาศยานเชียงใหม่</ion-select-option>
                    <ion-select-option value="NNT">ท่าอากาศยานน่านนคร</ion-select-option>
                    <ion-select-option value="PRH">ท่าอากาศยานแพร่</ion-select-option>
                    <ion-select-option value="LPT">ท่าอากาศยานลำปาง</ion-select-option>
                    <ion-select-option value="MAQ">ท่าอากาศยานแม่สอด</ion-select-option>
                    <ion-select-option value="THS">ท่าอากาศยานสุโขทัย</ion-select-option>
                    <ion-select-option value="PHS">ท่าอากาศยานพิษณุโลก</ion-select-option>
                    <ion-select-option value="UTH">ท่าอากาศยานนานาชาติอุดรธานี</ion-select-option>
                    <ion-select-option value="KOP">ท่าอากาศยานนครพนม</ion-select-option>
                    <ion-select-option value="KKC">ท่าอากาศยานขอนแก่น</ion-select-option>
                    <ion-select-option value="ROI">ท่าอากาศยานร้อยเอ็ด</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item lines="full" color="tertiary">
                  <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" mode="ios"
                    cancelText="ยกเลิก" interface="action-sheet" placeholder="จุดหมาย">
                    <ion-select-option value="tBKK">ท่าอากาศยานสุวรรณภูมิ</ion-select-option>
                    <ion-select-option value="tDMK">ท่าอากาศยานดอนเมือง</ion-select-option>
                    <ion-select-option value="tChiangrai">ท่าอากาศยานแม่ฟ้าหลวง</ion-select-option>
                    <ion-select-option value="tHGN">ท่าอากาศยานแม่ฮ่องสอน</ion-select-option>
                    <ion-select-option value="tCNX">ท่าอากาศยานเชียงใหม่</ion-select-option>
                    <ion-select-option value="tNNT">ท่าอากาศยานน่านนคร</ion-select-option>
                    <ion-select-option value="tPRH">ท่าอากาศยานแพร่</ion-select-option>
                    <ion-select-option value="tLPT">ท่าอากาศยานลำปาง</ion-select-option>
                    <ion-select-option value="tMAQ">ท่าอากาศยานแม่สอด</ion-select-option>
                    <ion-select-option value="tTHS">ท่าอากาศยานสุโขทัย</ion-select-option>
                    <ion-select-option value="tPHS">ท่าอากาศยานพิษณุโลก</ion-select-option>
                    <ion-select-option value="tUTH">ท่าอากาศยานนานาชาติอุดรธานี</ion-select-option>
                    <ion-select-option value="tKOP">ท่าอากาศยานนครพนม</ion-select-option>
                    <ion-select-option value="tKKC">ท่าอากาศยานขอนแก่น</ion-select-option>
                    <ion-select-option value="tROI">ท่าอากาศยานร้อยเอ็ด</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item slot="header" color="tertiary" lines="full" mode="md">
                  <ion-label> ผู้ใหญ่ (12ปีขึ้นไป) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople0()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people0 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople0()">
                  </ion-icon>
                </ion-item>
                <ion-item color="tertiary" lines="full" mode="md">
                  <ion-label> เด็ก (2-11ปี) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople1()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people1 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople1()">
                  </ion-icon>
                </ion-item>
                <ion-item color="tertiary" lines="full" mode="md">
                  <ion-label> ทารก (น้อยกว่า2ปี) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople2()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people2 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople2()">
                  </ion-icon>
                </ion-item>

                <ion-accordion-group color="tertiary" mode="ios">
                  <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0;" color="tertiary">
                    <ion-item slot="header" color="tertiary">
                      <ion-label>วันออกเดินทาง</ion-label>
                      <ion-note slot="end">{{ date0 }}</ion-note>
                    </ion-item>
                    <ion-datetime id="datetime" slot="content" locale="th-TH" @ionChange="formatDate0($event)"
                      display-format="YYYY-MM-DD"></ion-datetime>
                  </ion-accordion>
                </ion-accordion-group>
                <br />
                <ion-button color="danger" class="ion-no-margin" expand="full" routerLink="/air-oneway-ticket">เลือก
                </ion-button>
              </ion-list>
            </div>

            <div class="animate__animated animate__slideInUp animate__fast" v-if="segment === 'two'">
              <ion-list class="animate__animated animate__slideInUp animate__fast ion-no-padding border-radius"
                style="background: white">
                <ion-item lines="full" color="tertiary">
                  <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" mode="ios"
                    cancelText="ยกเลิก" interface="action-sheet" placeholder="เดินทางจาก">
                    <ion-select-option value="BKK">ท่าอากาศยานสุวรรณภูมิ</ion-select-option>
                    <ion-select-option value="DMK">ท่าอากาศยานดอนเมือง</ion-select-option>
                    <ion-select-option value="Chiangrai">ท่าอากาศยานแม่ฟ้าหลวง</ion-select-option>
                    <ion-select-option value="HGN">ท่าอากาศยานแม่ฮ่องสอน</ion-select-option>
                    <ion-select-option value="CNX">ท่าอากาศยานเชียงใหม่</ion-select-option>
                    <ion-select-option value="NNT">ท่าอากาศยานน่านนคร</ion-select-option>
                    <ion-select-option value="PRH">ท่าอากาศยานแพร่</ion-select-option>
                    <ion-select-option value="LPT">ท่าอากาศยานลำปาง</ion-select-option>
                    <ion-select-option value="MAQ">ท่าอากาศยานแม่สอด</ion-select-option>
                    <ion-select-option value="THS">ท่าอากาศยานสุโขทัย</ion-select-option>
                    <ion-select-option value="PHS">ท่าอากาศยานพิษณุโลก</ion-select-option>
                    <ion-select-option value="UTH">ท่าอากาศยานนานาชาติอุดรธานี</ion-select-option>
                    <ion-select-option value="KOP">ท่าอากาศยานนครพนม</ion-select-option>
                    <ion-select-option value="KKC">ท่าอากาศยานขอนแก่น</ion-select-option>
                    <ion-select-option value="ROI">ท่าอากาศยานร้อยเอ็ด</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item lines="full" color="tertiary">
                  <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" mode="ios"
                    cancelText="ยกเลิก" interface="action-sheet" placeholder="จุดหมาย">
                    <ion-select-option value="tBKK">ท่าอากาศยานสุวรรณภูมิ</ion-select-option>
                    <ion-select-option value="tDMK">ท่าอากาศยานดอนเมือง</ion-select-option>
                    <ion-select-option value="tChiangrai">ท่าอากาศยานแม่ฟ้าหลวง</ion-select-option>
                    <ion-select-option value="tHGN">ท่าอากาศยานแม่ฮ่องสอน</ion-select-option>
                    <ion-select-option value="tCNX">ท่าอากาศยานเชียงใหม่</ion-select-option>
                    <ion-select-option value="tNNT">ท่าอากาศยานน่านนคร</ion-select-option>
                    <ion-select-option value="tPRH">ท่าอากาศยานแพร่</ion-select-option>
                    <ion-select-option value="tLPT">ท่าอากาศยานลำปาง</ion-select-option>
                    <ion-select-option value="tMAQ">ท่าอากาศยานแม่สอด</ion-select-option>
                    <ion-select-option value="tTHS">ท่าอากาศยานสุโขทัย</ion-select-option>
                    <ion-select-option value="tPHS">ท่าอากาศยานพิษณุโลก</ion-select-option>
                    <ion-select-option value="tUTH">ท่าอากาศยานนานาชาติอุดรธานี</ion-select-option>
                    <ion-select-option value="tKOP">ท่าอากาศยานนครพนม</ion-select-option>
                    <ion-select-option value="tKKC">ท่าอากาศยานขอนแก่น</ion-select-option>
                    <ion-select-option value="tROI">ท่าอากาศยานร้อยเอ็ด</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item slot="header" color="tertiary" lines="full" mode="md">
                  <ion-label> ผู้ใหญ่ (12ปีขึ้นไป) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople0()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people0 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople0()">
                  </ion-icon>
                </ion-item>
                <ion-item color="tertiary" lines="full" mode="md">
                  <ion-label> เด็ก (2-11ปี) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople1()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people1 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople1()">
                  </ion-icon>
                </ion-item>
                <ion-item color="tertiary" lines="full" mode="md">
                  <ion-label> ทารก (น้อยกว่า2ปี) </ion-label>
                  <ion-icon name="remove-circle" color="danger" style="margin-right: 10px" @click="decrementPeople2()">
                  </ion-icon>
                  <a style="width: 10px; color: black;">{{ people2 }}</a>
                  <ion-icon name="add-circle" color="danger" style="margin-left: 10px" @click="incrementPeople2()">
                  </ion-icon>
                </ion-item>

                <ion-accordion-group color="tertiary" mode="ios">
                  <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0;" color="tertiary">
                    <ion-item slot="header" color="tertiary">
                      <ion-label>วันออกเดินทาง</ion-label>
                      <ion-note slot="end">{{ date1 }}</ion-note>
                    </ion-item>
                    <ion-datetime id="datetime" slot="content" locale="th-TH" @ionChange="formatDate1($event)"
                      display-format="YYYY-MM-DD"></ion-datetime>
                  </ion-accordion>
                </ion-accordion-group>

                <ion-accordion-group color="tertiary" mode="ios">
                  <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0;" color="tertiary">
                    <ion-item slot="header" color="tertiary">
                      <ion-label>วันเดินทางกลับ</ion-label>
                      <ion-note slot="end">{{ date2 }}</ion-note>
                    </ion-item>
                    <ion-datetime id="datetime" slot="content" locale="th-TH" @ionChange="formatDate2($event)"
                      display-format="YYYY-MM-DD"></ion-datetime>
                  </ion-accordion>
                </ion-accordion-group>
                <br />
                <ion-button color="danger" class="ion-no-margin" expand="full" routerLink="/air-twoway-out">
                  เลือก</ion-button>
              </ion-list>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
    
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonList,
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonSegment,
  IonSelect,
  IonLabel,
  IonNote,
  IonDatetime,
  IonSegmentButton,
  IonSelectOption,
  IonIcon
} from '@ionic/vue';
import moment from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Air-ticket',
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonAccordion,
    IonAccordionGroup,
    IonButton,
    IonCard,
    IonCardContent,
    IonItem,
    IonSegment,
    IonSelect,
    IonLabel,
    IonNote,
    IonDatetime,
    IonSegmentButton,
    IonSelectOption,
    IonIcon
  },
  data() {
    return {
      segment: 'one',
      people0: 0,
      people1: 0,
      people2: 0,
      date0: '',
      date1: '',
      date2: ''
    }
  },
    created() {
    this.date0 = moment().format('DD/MM/YYYY');
    this.date1 = moment().format('DD/MM/YYYY');
    this.date2 = moment().format('DD/MM/YYYY');
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
