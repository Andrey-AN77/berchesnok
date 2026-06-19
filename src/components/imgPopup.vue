<template>
  <div class="wrap">
    <div class="modal" tabindex="-1" @click="onEmit">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="forimg" @click="onEmit">
              <img :src="path" :alt="path" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  path: String,
});

const emit = defineEmits(["close"]);

const onEmit = () => emit("close");
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.modal-dialog {
  max-width: 1000px;
}

.modal {
  display: block;
}
.forimg {
  width: 100%;
  cursor: pointer;
}
</style>
