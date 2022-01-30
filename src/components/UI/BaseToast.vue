<template>
  <teleport to="body">
    <div v-for="m in msg" :key="m" class="fixed top-40 right-96">
      <div class="p-2 bg-white rounded-lg text-gray-500" @click="closeHandle">
        {{ m }}
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "BaseToast",
  props: {
    msg: {
      type: Array,
      required: true,
    },
    timeout: {
      type: Number,
      default: 2000,
      validate: function (val) {
        return val >= 0;
      },
    },
    clickToClose: { type: Boolean, default: true },
    close: { type: Function, required: true },
  },

  setup(props) {
    let innerTimeout = ref();

    onMounted(() => {
      if (props.timeout > 0)
        innerTimeout.value = setTimeout(() => {
          props.close();
        }, props.timeout);
    });

    const closeHandle = () => {
      if (props.clickToClose) props.close();
    };

    return { closeHandle };
  },
};
</script>
