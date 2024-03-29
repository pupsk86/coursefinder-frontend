import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_COURSE_TO_FAVOURITE, DELETE_COURSE_FROM_FAVOURITE, ADD_COURSE_TO_COMPARATIVE, DELETE_COURSE_FROM_COMPARATIVE } from './mutation-types'
import { TOGGLE_COURSE_IS_IN_FAVOURITE_LIST, TOGGLE_COURSE_IS_IN_COMPARE_LIST, REMOVE_COURSE_FROM_COMPARE_LIST } from './action-types'

Vue.use(Vuex)

const state = {
  courses: {
    1: { id: 1, title: 'Programming for Everybody (Getting Started with Python)', logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/9b/39a3f0373111e69ce719fe5f0d2d9d/Capture.png?auto=format%2Ccompress&dpr=1&w=268', rate: 2.5, price: 'Бесплатно', level: 'Начальный уровень',   lang: 'Английский (субтитры: Английский, Русский)',          description: 'This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers elementary data structures, sorting, and searching algorithms. Part II focuses on graph- and string-processing algorithms. All the features of this course are available for free.  It does not offer a certificate upon completion.' },
    2: { id: 2, title: 'Getting Started with AWS Machine Learning',               logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2b/735b609dd611e4b03681f313abb290/iipp_icon.png?auto=format%2Ccompress&dpr=1&w=268', rate: 3.5, price: 'Бесплатно', level: 'Средний уровень',     lang: 'Английский (субтитры: Английский)',                   description: 'This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook “Python for Everybody”.  This course covers Python 3.' },
    3: { id: 3, title: 'Programming Languages, Part B',                           logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e3/f27630d13511e88dd241e68ded0cea/K_logo_800x800.png?auto=format%2Ccompress&dpr=1&w=268', rate: 4.5, price: 'Бесплатно', level: 'Продвинутый уровень', lang: 'Английский (субтитры: Английский)',                   description: 'This course is an introduction to the basic concepts of programming languages, with a strong emphasis on functional programming. The course uses the languages ML, Racket, and Ruby as vehicles for teaching the concepts, but the real intent is to teach enough about how any language “fits together” to make you more effective programming in any language -- and in learning new ones. This course is neither particularly theoretical nor just about programming specifics -- it will give you a framework for understanding how to use language constructs effectively and how to design correct and elegant programs. By using different languages, you will learn to think more deeply than in terms of the particular syntax of one language. The emphasis on functional programming is essential for learning how to write robust, reusable, composable, and elegant programs. Indeed, many of the most important ideas in modern languages have their roots in functional programming. Get ready to learn a fresh and beautiful way to look at software and how to have fun building it. The course assumes some prior experience with programming, as described in more detail in the first module of Part A.  Part B assumes successful completion of Part A. The course is divided into three Coursera courses: Part A, Part B, and Part C.  As explained in more detail in the first module of Part A, the overall course is a substantial amount of challenging material, so the three-part format provides two intermediate milestones and opportunities for a pause before continuing.  The three parts are designed to be completed in order and set up to motivate you to continue through to the end of Part C.  Week 1 of Part A has a more detailed list of topics for all three parts of the course, but it is expected that most course participants will not (yet!) know what all these topics mean.' },
    4: { id: 4, title: 'Learn to Program: The Fundamentals',                      logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/topics/programming1/large-icon.png?auto=format%2Ccompress&dpr=1&w=268', rate: 5,   price: 'Бесплатно', level: 'Начальный уровень',   lang: 'Английский, Русский (субтитры: Английский, Русский)', description: 'This two-part course is designed to help students with very little or no computing background learn the basics of building simple interactive applications. Our language of choice, Python, is an easy-to learn, high-level computer language that is used in many of the computational courses offered on Coursera. To make learning Python easy, we have developed a new browser-based programming environment that makes developing interactive applications in Python simple. These applications will involve windows whose contents are graphical and respond to buttons, the keyboard and the mouse.' },
  },
  favouriteCourses: [2, 3],
  comparativeCourses: [1, 3],
}

const mutations = {
  [ADD_COURSE_TO_FAVOURITE] (state, {id}) {
    state.favouriteCourses.push(id)
  },
  [DELETE_COURSE_FROM_FAVOURITE] (state, {id}) {
    state.favouriteCourses.splice(state.favouriteCourses.indexOf(id), 1)
  },
  [ADD_COURSE_TO_COMPARATIVE] (state, {id}) {
    state.comparativeCourses.push(id)
  },
  [DELETE_COURSE_FROM_COMPARATIVE] (state, {id}) {
    state.comparativeCourses.splice(state.comparativeCourses.indexOf(id), 1)
  },
}

const actions = {
  [TOGGLE_COURSE_IS_IN_FAVOURITE_LIST] ({ commit, getters }, course) {
    if (getters.isCourseFavourite(course)) {
      commit(DELETE_COURSE_FROM_FAVOURITE, course)
    } else {
      commit(ADD_COURSE_TO_FAVOURITE, course)
    }
  },
  [TOGGLE_COURSE_IS_IN_COMPARE_LIST] ({ commit, getters }, course) {
    if (getters.isCourseComparative(course)) {
      commit(DELETE_COURSE_FROM_COMPARATIVE, course)
    } else {
      commit(ADD_COURSE_TO_COMPARATIVE, course)
    }
  },
  [REMOVE_COURSE_FROM_COMPARE_LIST] ({ commit }, course) {
    commit(DELETE_COURSE_FROM_COMPARATIVE, course)
  }
}

const getters = {
  getFavouriteCoursesCnt: (state) => {
    return state.favouriteCourses.length
  },
  getComparativeCoursesCnt: (state) => {
    return state.comparativeCourses.length
  },
  getComparativeCourses: (state) => {
    return state.comparativeCourses.map(courseId => state.courses[courseId])
  },
  isCourseFavourite: (state) => (course) => {
    return state.favouriteCourses.includes(course.id)
  },
  isCourseComparative: (state) => (course) => {
    return state.comparativeCourses.includes(course.id)
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  mutations,
  getters
})