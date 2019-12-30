<template>
  <div class="app-container">
    <aside>
      {{ $t('guide.description') }}
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      {{ $t('guide.button') }}
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      allowClose: false, // Whether the click on overlay should close or not
      overlayClickNext: true, // Whether the click on overlay should move next
      doneBtnText: this.$i18n.t('driver.doneBtnText'),
      closeBtnText: this.$i18n.t('driver.closeBtnText'),
      nextBtnText: this.$i18n.t('driver.nextBtnText'),
      prevBtnText: this.$i18n.t('driver.prevBtnText'),
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
