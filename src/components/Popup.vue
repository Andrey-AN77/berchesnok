<template>
  
  <div class="wrap">
      <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <slot></slot>
            </div>

          </div>
        </div>
      </div>


  </div>

</template>

<script>
export default {

};
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


.modal{
  display: block;
}
</style>