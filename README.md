# Online Learning Platform

## Project Overview
The Online Learning Platform is a web-based application that allows users to access a variety of educational video courses. Students can browse the course catalog, watch video lessons, and track their progress as they complete the courses.

## Core Features
- **Course Catalog**: Users can browse a catalog of available courses, with each course displayed with a thumbnail image.
- **Course Detail Pages**: Each course has a dedicated detail page that displays the video lessons, lesson duration, and total course duration.
- **Progress Tracking**: Users can track their progress as they complete the lessons within a course.
- **Search and Filtering**: Users can search and filter courses by category (Programming, Design, Business).
- **Student Dashboard**: Users can view a dashboard of the courses they are currently enrolled in.
- **Certificate of Completion**: Users receive a certificate upon completion of a course.

## Course Information
- Each course consists of multiple video lessons that must be played in sequence.
- Lesson duration and total course duration are displayed.
- Courses are categorized as either "Free" or "Premium" (no payment functionality yet).

## Design Preferences
- The application has a modern, clean, and educational look and feel.
- The user interface is easy to navigate.
- The application is mobile-friendly, allowing users to learn on the go.
- A dark mode option is available for video watching.
- Progress bars are used to visualize the user's progress within a course.

## Getting Started
To get started with the Online Learning Platform, please follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/online-learning-platform.git`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your web browser: `http://localhost:3000`

## API Documentation
The Online Learning Platform exposes the following API endpoints:

### Courses
- `GET /api/courses`: Retrieve a list of all available courses.
- `GET /api/courses/:id`: Retrieve the details of a specific course.

### Lessons
- `GET /api/courses/:courseId/lessons`: Retrieve the list of lessons for a specific course.
- `GET /api/courses/:courseId/lessons/:lessonId`: Retrieve the details of a specific lesson.

### Progress
- `GET /api/users/:userId/progress`: Retrieve the user's progress for all enrolled courses.
- `POST /api/users/:userId/progress`: Update the user's progress for a specific course.

For more detailed information, please refer to the [API Documentation](./docs/api-documentation.md).

## User Guides
The following user guides are available:

- [Student Guide](./docs/student-guide.md): Detailed instructions for students on how to use the Online Learning Platform.
- [Instructor Guide](./docs/instructor-guide.md): Detailed instructions for instructors on how to manage courses and lessons.

## Contributing
We welcome contributions to the Online Learning Platform project. If you would like to contribute, please follow the guidelines outlined in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License
The Online Learning Platform is licensed under the [MIT License](./LICENSE).