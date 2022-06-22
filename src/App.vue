<template>
  <ion-app>
    <ion-router-outlet mode="ios" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

.text-red {
  color: var(--ion-color-danger) !important;
}

.text-white {
  color: var(--ion-color-tertiary) !important;
}

.text-gray {
  color: gray !important;
}

.text-blue {
  color: var(--ion-color-primary) !important;
}

.text-black {
  color: var(--ion-color-dark) !important;
}

.text-yellow {
  color: var(--ion-color-warning) !important;
}

.eslip-aproved-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: unset;
}

.eslip-dim {
  -webkit-filter: brightness(50%);
  -moz-filter: brightness(50%);
  filter: url(#brightness);
  filter: brightness(50%);
}

.content-full {
  min-height: 100%;
}

ion-toolbar {
  box-shadow: 1px 48px 107px -21px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 1px 48px 107px -21px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 1px 48px 107px -21px rgba(0, 0, 0, 0.56);
}

ion-card {
  margin-bottom: 0%;
  margin-top: 10%;
  margin: unset !important;
  width: auto !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: unset;
}

ion-card .qr {
  display: block;
  width: unset;
}

ion-card .icon {
  align-items: center;
}

ion-card .circle {
  border-radius: 50% !important;
}

ion-card-content {
  margin-bottom: -5%;
  margin-top: -5%;
  margin: unset !important;
  border: none !important;
  width: auto !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: unset;
  align-items: center;
}

ion-card-content .qr {
  display: block;
  width: unset;
}

ion-card-content .icon {
  width: unset;
  display: unset;
}

ion-card-content .circle {
  border-radius: 50% !important;
}

ion-item {
  margin-bottom: 5%;
  margin-top: 5%;
  margin: unset !important;
  border: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: unset;
}

ion-item img.circle {
  border-radius: 50% !important;
}

#rcorners5 {
  border-radius: 50px 50px 50px 5px;
  width: 70px;
  height: 40px;
}

.center {
  margin-left: auto;
  margin-right: auto;
  float: none;
  display: block;
}

.searchbar-ios {
  background: unset;
}

form ion-item ion-label {
  font-weight: bold;
}

.non-circle {
  border-radius: unset !important;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

ion-fab {
  margin: 0 !important;
}

.bold {
  font-weight: bold;
}

.line-through {
  text-decoration: line-through;
}

.transaction .right-line {
  border-right: 0.55px solid #c8c7cc !important;
}

.transaction .right-arrow {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: var(--ion-color-medium);
  background-color: var(--ion-color-tertiary);
}

.transaction .indentation {
  background-image: url(./views/assets/imgs/indentationbg.png);
  background-repeat: repeat-x;
  height: 10px;
  margin-top: -1px;
  background-size: 16px;
}

.transaction .text-no-wrap {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.transaction .text-vertical-center {
  margin: auto 0px !important;
}

.transaction .content-center {
  display: flex;
  justify-content: center;
}

.transaction .padding-vertical-long {
  padding: 50px 0 !important;
}

.transaction ion-label {
  margin: unset !important;
}

.transaction .list-ios {
  margin: unset !important;
}

.transaction .transaction-img {
  width: 35px;
  height: 35px;
}

ion-avatar.avatar-xs {
  width: 18px;
  height: 18px;
}

ion-avatar.avatar-s {
  width: 30px;
  height: 30px;
}

ion-avatar.avatar-m {
  width: 45px;
  height: 45px;
}

ion-avatar.avatar-l {
  width: 60px;
  height: 60px;
}

ion-avatar.avatar-xl {
  width: 80px;
  height: 80px;
}

.logo-xs {
  width: 18px;
  height: 18px;
}

.logo-s {
  width: 30px;
  height: 30px;
}

.logo-m {
  width: 45px;
  height: 45px;
}

.logo-l {
  width: 60px;
  height: 60px;
}

ion-fab-button.fab-small {
  margin-top: 0%;
  margin-bottom: 2%;
  width: 25px;
  height: 25px;
}

.no-shadow {
  --box-shadow: none !important;
  box-shadow: none !important;
}

.text-indent {
  text-indent: 5%;
}

.ion-select-full {
  max-width: unset;
  width: 100%;
}

ion-item.imageCenter img {
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

ion-label ion-skeleton-text {
  height: 17px;
  width: 80%;
}

H3 ion-skeleton-text {
  height: 14px;
  width: 60%;
}

.line-height2 {
  line-height: 2 !important;
}

.text-hidden {
  overflow: hidden;
}

.input-money {
  margin-left: 26px;
}

a.link-medium {
  text-decoration: none !important;
  color: var(--ion-color-medium) !important;
}

.upload-image-crop {
  padding: 20px;
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0.1) 50%);
  mask-image: radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0.1) 50%);
}

.border-radius {
  border-radius: 10px;
}

ion-toggle {
  --handle-height: 20px;
  --handle-width: 15px;
  height: 20px;
  width: 30px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.hacking-datetime {
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: absolute;
  bottom: 0;
  width: 100%;
}

ion-accordion-group ion-accordion .ion-accordion-toggle-icon {
	 display: none;
}
</style>

