<template>
  <div
    class="fixed inset-0 bg-white/90 flex items-center justify-center z-[150]"
  >
    <div class="spinner">
      <div v-for="n in 12" :key="n" :class="`bar${n}`"></div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  position: relative;
  width: 54px;
  height: 54px;
  display: inline-block;
  margin-left: 50%;
  margin-right: 50%;
  padding: 10px;
  border-radius: 10px;
}

.spinner div {
  width: 6%;
  height: 16%;
  background: rgba(0, 0, 0, 0.788);
  position: absolute;
  left: 49%;
  top: 43%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: fade 1s linear infinite;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
}

.spinner div.bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}

.spinner div.bar2 {
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -0.9167s;
}

.spinner div.bar3 {
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -0.833s;
}
.spinner div.bar4 {
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.7497s;
}
.spinner div.bar5 {
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.667s;
}
.spinner div.bar6 {
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.5837s;
}
.spinner div.bar7 {
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.5s;
}
.spinner div.bar8 {
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.4167s;
}
.spinner div.bar9 {
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.333s;
}
.spinner div.bar10 {
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.2497s;
}
.spinner div.bar11 {
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.167s;
}
.spinner div.bar12 {
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.0833s;
}
</style>
