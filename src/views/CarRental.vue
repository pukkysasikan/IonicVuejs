<template>
  <ion-page>
    <ion-header class="header" mode="ios">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button text="" icon="chevron-back-outline"></ion-back-button>
        </ion-buttons>
        <ion-title class="text-light ion-padding-center">Car Rental </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content color="tertiary">
          <div class="ion-no-margin">
            <ion-card color="tertiary" class="ion-no-padding border-radius">
              <ion-card-header>
                <ion-label style="font-size: 16px">
                  <b>ค้นหารถ</b>
                </ion-label>
              </ion-card-header>

              <!-- เลือกคนขับ -->
              <ion-radio-group mode="ios" color="tertiary" @ionChange="onDriverChange($event)" v-model="driver">
                <ion-row>
                  <ion-col class="ion-no-padding">
                    <ion-item lines="full" color="tertiary">
                      <ion-label>
                        <h3><b>ขับเอง</b></h3>
                      </ion-label>
                      <ion-radio slot="start" value="no"></ion-radio>
                    </ion-item>
                  </ion-col>
                  <ion-col class="ion-no-padding">
                    <ion-item lines="full" color="tertiary">
                      <ion-label>
                        <h3><b>พร้อมคนขับ</b></h3>
                      </ion-label>
                      <ion-radio slot="start" value="yes"></ion-radio>
                    </ion-item>
                  </ion-col>
                </ion-row>
              </ion-radio-group>
              <!-- ******************************** -->
              <div v-if="driver === 'yes'">
                <ion-card-header>
                  <ion-card-title mode="md">
                    <h2>เลือกเพศคนขับ</h2>
                  </ion-card-title>
                </ion-card-header>
                <ion-radio-group mode="ios" color="tertiary">
                  <ion-row>
                    <ion-col class="ion-no-padding">
                      <ion-item lines="full" color="tertiary">
                        <ion-label>
                          <h3><b>ชาย</b></h3>
                        </ion-label>
                        <ion-radio slot="start" value="true"></ion-radio>
                      </ion-item>
                    </ion-col>
                    <ion-col class="ion-no-padding">
                      <ion-item lines="full" color="tertiary">
                        <ion-label>
                          <h3><b>หญิง</b></h3>
                        </ion-label>
                        <ion-radio slot="start" value="false"></ion-radio>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-radio-group>
              </div>
              <!-- ค้นหารถ -->

              <ion-searchbar placeholder="ตำแหน่งรับรถ" search-icon="location" mode="ios"></ion-searchbar>

              <!-- ******************************** -->

              <!-- ประเภทรถ -->
              <ion-row size="3">
                <ion-col class="ion-no-padding ion-no-margin">
                  <ion-item lines="full" color="tertiary">
                    <ion-label class="ion-margin-start">
                      <h3>รถเก๋ง</h3>
                    </ion-label>
                    <ion-checkbox slot="start" color="primary" mode="md" class="ion-no-margin">
                    </ion-checkbox>
                  </ion-item>
                </ion-col>
                <ion-col class="ion-no-padding ion-no-margin">
                  <ion-item lines="full" color="tertiary">
                    <ion-label class="ion-margin-start">
                      <h3>รถกระบะ</h3>
                    </ion-label>
                    <ion-checkbox slot="start" color="primary" mode="md" class="ion-no-margin">
                    </ion-checkbox>
                  </ion-item>
                </ion-col>
                <ion-col class="ion-no-padding ion-no-margin">
                  <ion-item lines="full" color="tertiary">
                    <ion-label class="ion-margin-start">
                      <h3>รถSUV</h3>
                    </ion-label>
                    <ion-checkbox slot="start" color="primary" mode="md" class="ion-no-margin">
                    </ion-checkbox>
                  </ion-item>
                </ion-col>
              </ion-row>
              <!-- ******************************** -->

              <!-- ยี่ห้อรถ -->
              <ion-item lines="full" color="tertiary">
                <ion-label style="font-size: 16px">
                  <b>ยี่ห้อรถ</b> (ถ้ามี)
                </ion-label>
                <ion-select mode="ios" multiple="true" cancelText="กลับ" okText="ตกลง">
                  <ion-select-option value="bacon">Toyota</ion-select-option>
                  <ion-select-option value="olives">Honda</ion-select-option>
                  <ion-select-option value="xcheese">Ford</ion-select-option>
                  <ion-select-option value="peppers">MG</ion-select-option>
                  <ion-select-option value="mushrooms">Mini</ion-select-option>
                  <ion-select-option value="onions">Mazda</ion-select-option>
                  <ion-select-option value="pepperoni">Mercedes benz</ion-select-option>
                  <ion-select-option value="pineapple">BMW</ion-select-option>
                  <ion-select-option value="sausage">Volkswagen</ion-select-option>
                  <ion-select-option value="Spinach">Isuzu</ion-select-option>
                </ion-select>
              </ion-item>
              <!-- ******************************** -->

              <!-- วันที่เช่า -->
              <ion-accordion-group color="tertiary" mode="ios">
                <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0;" color="tertiary">
                  <ion-item slot="header" color="tertiary">
                    <ion-label style="font-size: 16px">วันที่เช่า</ion-label>
                    <ion-note slot="end">{{ date1 }}</ion-note>
                  </ion-item>
                  <ion-datetime style="background: white;" id="datetime" slot="content" locale="th-TH" @ionChange="formatDate1($event)"
                    display-format="YYYY-MM-DD"></ion-datetime>
                </ion-accordion>
              </ion-accordion-group>
              <ion-accordion-group color="tertiary" mode="ios">
                <ion-accordion value="start" style="border-bottom: 1px solid #e0e0e0;" color="tertiary" toggleIconSlot="start">
                  <ion-item slot="header" color="tertiary">
                    <ion-label style="font-size: 16px">วันที่คืน</ion-label>
                    <ion-note slot="end">{{ date2 }}</ion-note>
                  </ion-item>
                  <ion-datetime style="background: white;"  id="datetime" slot="content" locale="th-TH" @ionChange="formatDate2($event)"
                    display-format="YYYY-MM-DD"></ion-datetime>
                </ion-accordion>
              </ion-accordion-group>
              <!-- ******************************** -->
              <ion-card-header mode="md">
                <ion-card-title style="font-size: 16px"><b>ช่วงอายุของคนขับ (ผู้เช่า)</b></ion-card-title>
              </ion-card-header>

              <ion-item lines="none" color="tertiary">
                <ion-segment color="danger" value="18-29" mode="ios">
                  <ion-segment-button value="18-29">
                    <ion-label>18-29</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="30-70">
                    <ion-label>30-70</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="71+">
                    <ion-label>71+</ion-label>
                  </ion-segment-button>
                </ion-segment>
              </ion-item>
              <br />
              <ion-button color="danger" class="ion-no-margin" expand="full" type="submit" routerLink="/selectcar">
                ค้นหา
              </ion-button>
            </ion-card>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content color="tertiary">
          <ion-slides>
            <ion-slide>
              <div class="slide">
                <ion-card color="tertiary" class="ion-no-padding border-radius cardpromo"
                  routerLink="/tabs/car-promotion">
                  <img class="imgpromo" src="http://img.painaidii.com/images/20140602_3_1401679212_100092.jpg" />
                  <ion-card color="tertiary">
                    <ion-label>
                      <h2>
                        &nbsp;บินแล้ว "ขับ" กับ Air Asia มีเที่ยวบินแล้ว...ต้องมีรถ
                        เช่ารถขับเริ่มต้นเพียง 699* บาท/วัน
                      </h2>
                      <br />
                    </ion-label>
                  </ion-card>
                </ion-card>
              </div>
            </ion-slide>

            <ion-slide>
              <div class="ion-no-margin">
                <ion-card color="tertiary" class="ion-no-padding border-radius cardpromo"
                  routerLink="/tabs/car-promotion">
                  <img class="imgpromo"
                    src="https://bookings.co.th/wp-content/uploads/%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%9A%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%A5%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88-Drivehub.jpg" />
                  <ion-card color="tertiary">
                    <ion-label>
                      <h2>
                        &nbsp;โปรโมชั่น รับวันหยุดยาวนี้ จองรถเช่าราคาเริ่มต้น 500.-
                      </h2>
                      <br />
                    </ion-label>
                  </ion-card>
                </ion-card>
              </div>
            </ion-slide>
          </ion-slides>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonItem,
  IonSegment,
  IonSelect,
  IonLabel,
  IonSlides,
  IonCol,
  IonRow,
  IonNote,
  IonDatetime,
  IonSegmentButton,
  IonSelectOption,
  format, parseISO, getDate, getMonth, getYear
} from '@ionic/vue';
import { defineComponent } from 'vue';
import moment from 'moment';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonAccordion,
    IonAccordionGroup,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonRadio,
    IonRadioGroup,
    IonCheckbox,
    IonItem,
    IonSegment,
    IonSelect,
    IonLabel,
    IonSlides,
    IonCol,
    IonRow,
    IonNote,
    IonDatetime,
    IonSegmentButton,
    IonSelectOption
  },
  created() {
    this.date1 = moment().format('DD/MM/YYYY');
    this.date2 = moment().format('DD/MM/YYYY');
  },
  data() {
    return {
      driver: 'no',
      nowDate: new Date(),
      date1: "",
      date2: "",
    }
  },
  methods: {
    onDriverChange(event) {
      this.driver = event.target.value;
    },
    formatDate1(event) {
      this.date1 = moment(event.target.value).format("DD/MM/YYYY");
    },
    formatDate2(event) {
      this.date2 = moment(event.target.value).format("DD/MM/YYYY");
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
