<template>
  <div
    class="space-y-1 rounded-2xl shadow-xs max-w-xl w-full border border-gray-300/70 bg-white flex flex-col"
  >
    <div
      class="h-20 border-b border-gray-300/70 px-4 py-3 relative mx-4 flex items-center justify-center"
    >
      <Icon
        name="mage:message-round"
        class="w-[18px] h-[18px] text-gray-700/80 absolute left-3"
      />
      <h1 class="text-black font-medium text-lg text-center">Welcome</h1>
    </div>
    <div class="text-center h-4">
      <p
        class="text-xs font-medium bg-white text-center relative -top-[29px] inline-block p-4 text-gray-700/80"
      >
        Chat Started
      </p>
    </div>
    <transition-group
      name="slide"
      tag="div"
      class="flex flex-col justify-end gap-2 pb-6 mt-auto flex-1"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="px-4 py-3 flex gap-2"
      >
        <img
          :src="message.avatar"
          :alt="message.name"
          class="w-8 h-8 rounded-full"
        />
        <div class="flex flex-col">
          <div class="flex items-center text-xs gap-1">
            <p class="font-medium text-black">{{ message.name }}</p>
            <p class="text-gray-500/80 text-[10px]">
              {{
                new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              }}
            </p>
          </div>
          <p class="text-sm text-black" v-if="message.text">
            {{ message.text }}
          </p>
          <span
            v-if="message.html"
            v-html="message.html"
            class="text-sm text-black"
          ></span>
          <component
            :is="message.component"
            v-bind="message.props"
            v-if="message.component"
          >
            {{ message?.props?.slot }}
          </component>
        </div>
      </div>
    </transition-group>

    <div v-if="showTyping" class="px-4 py-3 flex gap-2">
      <img
        :src="typingUserAvatar"
        alt="Typing User"
        class="w-8 h-8 rounded-full"
      />
      <div
        class="flex items-center animate-pulse bg-gray-300/50 p-2.5 w-fit h-3 mt-auto rounded-full"
      >
        <span class="dot bg-gray-500"></span>
        <span class="dot bg-gray-500"></span>
        <span class="dot bg-gray-500"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from "@/types/Message";

interface Props {
  queuedMessages: Message[];
}

const props = defineProps<Props>();

const messages = ref<Message[]>([]);

const typingUserAvatar = computed(() => {
  return props.queuedMessages[0].avatar;
});

const showTyping = ref(false);

const processMessages = () => {
  if (props.queuedMessages.length === 0) return;

  showTyping.value = true;
  setTimeout(() => {
    const message = props.queuedMessages.shift();
    if (message) {
      messages.value.push(message);
    }
    showTyping.value = false;

    if (props.queuedMessages.length > 0) {
      setTimeout(() => {
        processMessages();
      }, 1000);
    }
  }, 1500);
};

onMounted(() => {
  processMessages();
});
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out;
}

@keyframes typing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.dot {
  width: 4px;
  height: 4px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  animation: typing 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
