import { createStore } from 'vuex'
let dataUrl = 'https://tarynleewalbrugh25.github.io/PortfolioF-data/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state , value) {
      state.jobTitle = value
    },
    setAbout(state , value) {
    state.about = value
    },
    setEducation(state , value) {
      state.education = value
    },
    setSkills(state , value) {
      state.skills = value
    },
    setTestimonials(state , value) {
      state.testimonials = value
    },
    setProject(state , value) {
      state.projects = value
    },
  },
  actions: {
    async fetchData(context) {
      try {
        let response = await fetch(dataUrl)
        let data = await response.json()
        context.commit('setJobTitle', data.jobTitle)
        context.commit('setAbout', data.about)
        context.commit('setEducation', data.education)
        context.commit('setSkills', data.skills)
        context.commit('setTestimonials', data.testimonials)
        context.commit('setProject', data.projects)
      } catch (error) {
        console.error('Error fetching data:', error)
   }
 }
},
  modules: {
  }
})
