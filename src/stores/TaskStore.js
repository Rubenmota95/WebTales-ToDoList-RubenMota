import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [{
      title: '',
      description: '',
      milestone: '',
      completed: false,
      arquived: false
    }]
  })
});
