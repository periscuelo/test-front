<template>
  <div class="px-2">
    <Products />
    <Resume />
    <Button
      title="Seguir para o pagamento"
      @click="goNext"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Products from '@/components/Products.vue';
import Resume from '@/components/Resume.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Cart',
  components: {
    Products,
    Resume,
    Button,
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions('Cart', ['getData']),
    goNext() {
      this.$router.push('payment');
    },
  },
};
</script>
