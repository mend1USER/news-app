<template>
  <div class="popup">
    <div>
      <span>Popup Name</span>
      <span>
        <v-btn icon class="red--text">fa-close</v-btn>
      </span>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="popup_footer">
      <button class="close_modal">Close</button>
      <v-btn icon class="red--text submit">fa-cancel</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUP",
};
</script>

<style scoped>
.popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  color: #ffffff;
  background: #26ae68;

  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}
</style>
