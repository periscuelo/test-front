<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="6"
        offset-md="3"
      >
        <b-button
          size="lg"
          block
          variant="danger"
          class="text-uppercase font-weight-bold mb-3 button"
          :disabled="disable"
          @click="$emit(event)"
        >
          {{ title }}
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    event: {
      type: String,
      default: 'click',
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  padding: 1.071rem 0;
}
.btn-danger {
  background-color: #ff7800;
  border-color: #ff7800;
  /deep/ &:disabled {
    &:hover {
      background-color: #dc3545;
      border-color: #dc3545;
    }
  }
  &:hover {
    background-color: #d45a00;
    border-color: #d45a00;
  }
}
</style>
