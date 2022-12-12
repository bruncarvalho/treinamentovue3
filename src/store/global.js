import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})

export default state

export function setGlobalLogin (status) {
  state.isLoading = status
}
