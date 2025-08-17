<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">Online Learning Platform</div>
        <ul>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
        <div class="search-box">
          <input type="text" placeholder="Search courses" v-model="searchTerm" />
          <button @click="searchCourses">Search</button>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>Learn New Skills Online</h1>
        <p>Explore our wide range of video courses and start learning today.</p>
        <button @click="showCourseForm = true">Enroll Now</button>
      </section>

      <section class="course-catalog">
        <h2>Course Catalog</h2>
        <div class="course-grid">
          <div class="course-card" v-for="course in filteredCourses" :key="course.id">
            <img :src="course.thumbnail" :alt="course.title" />
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <p>{{ course.category }}</p>
            <p>{{ course.duration }} hours</p>
            <button @click="enrollInCourse(course)">Enroll</button>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; Online Learning Platform</p>
    </footer>

    <div class="modal" v-if="showCourseForm">
      <div class="modal-content">
        <span class="close-button" @click="showCourseForm = false">&times;</span>
        <h2>Enroll in a Course</h2>
        <form @submit.prevent="submitCourseForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
            <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
            <div class="error" v-if="errors.email">{{ errors.email[0] }}</div>
          </div>
          <div class="form-group">
            <label for="course">Course:</label>
            <select id="course" v-model="formData.courseId" required>
              <option value="">Select a course</option>
              <option v-for="course in courses" :value="course.id" :key="course.id">
                {{ course.title }}
              </option>
            </select>
            <div class="error" v-if="errors.courseId">{{ errors.courseId[0] }}</div>
          </div>
          <button type="submit">Enroll</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Introduction to Programming',
          description: 'Learn the basics of programming with JavaScript.',
          category: 'Programming',
          duration: 20,
          thumbnail: 'programming-thumbnail.jpg'
        },
        {
          id: 2,
          title: 'Graphic Design Fundamentals',
          description: 'Explore the fundamentals of graphic design and create stunning visuals.',
          category: 'Design',
          duration: 15,
          thumbnail: 'design