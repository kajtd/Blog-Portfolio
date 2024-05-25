<script setup lang="ts">
interface Props {
  modelValue: string;
  secondary?: boolean;
  tertiary?: boolean;
  placeholder?: string;
  type?: string;
  pattern?: string;
  buttonText?: string;
  buttonType?: "submit" | "button" | "reset";
}

defineProps<Props>();
const emits = defineEmits(["button-click", "update:modelValue"]);

const onButtonClick = () => {
  emits("button-click");
};

const updateValue = (value: string) => {
  emits("update:modelValue", value);
};
</script>

<template>
  <div class="flex items-center w-full">
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      :pattern="pattern"
      @input="updateValue($event.target.value)"
      :class="[
        'text-sm w-fit px-3 h-8 rounded-l-[10px] shadow-sm border flex-1 transition bg-white',
        {
          'border-gray-300/80 outline-none ring-offset focus:ring-2 focus:ring-primary-300 focus:z-10':
            !secondary && !tertiary,
          'rounded-[10px]': !buttonText,
        },
      ]"
      type="text"
    />
    <button
      v-if="buttonText"
      :class="[
        'text-sm px-3 h-8 rounded-r-[10px] shadow-sm border border-l-0 font-medium transition w-fit',
        {
          'border-gray-300/80 text-black bg-white outline-none ring-offset hover:ring-2 hover:ring-primary-300 focus:z-10':
            !secondary && !tertiary,
        },
      ]"
      :type="buttonType"
      @click="onButtonClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
