import unittest
from unittest.mock import patch
from datetime import datetime
from app.models import Course, Lesson, User, Enrollment
from app.views import CourseListView, CourseDetailView, EnrollmentView, DashboardView

class TestCourseModel(unittest.TestCase):
    def test_course_creation(self):
        course = Course(
            title="Python for Beginners",
            description="Learn the basics of Python programming",
            category="Programming",
            is_premium=False
        )
        self.assertEqual(course.title, "Python for Beginners")
        self.assertEqual(course.description, "Learn the basics of Python programming")
        self.assertEqual(course.category, "Programming")
        self.assertFalse(course.is_premium)

    def test_lesson_creation(self):
        course = Course(
            title="Python for Beginners",
            description="Learn the basics of Python programming",
            category="Programming",
            is_premium=False
        )
        lesson = Lesson(
            title="Introduction to Python",
            description="Learn the basics of Python syntax and data types",
            duration=30,
            course=course
        )
        self.assertEqual(lesson.title, "Introduction to Python")
        self.assertEqual(lesson.description, "Learn the basics of Python syntax and data types")
        self.assertEqual(lesson.duration, 30)
        self.assertEqual(lesson.course, course)

class TestUserModel(unittest.TestCase):
    def test_user_creation(self):
        user = User(
            username="johndoe",
            email="johndoe@example.com",
            password="password123"
        )
        self.assertEqual(user.username, "johndoe")
        self.assertEqual(user.email, "johndoe@example.com")
        self.assertEqual(user.password, "password123")

class TestEnrollmentModel(unittest.TestCase):
    def test_enrollment_creation(self):
        course = Course(
            title="Python for Beginners",
            description="Learn the basics of Python programming",
            category="Programming",
            is_premium=False
        )
        user = User(
            username="johndoe",
            email="johndoe@example.com",
            password="password123"
        )
        enrollment = Enrollment(
            user=user,
            course=course,
            completed_lessons=["Introduction to Python", "Variables and Data Types"]
        )
        self.assertEqual(enrollment.user, user)
        self.assertEqual(enrollment.course, course)
        self.assertEqual(enrollment.completed_lessons, ["Introduction to Python", "Variables and Data Types"])

class TestCourseListView(unittest.TestCase):
    @patch('app.views.Course.objects.all')
    def test_course_list_view(self, mock_course_all):
        mock_course_all.return_value = [
            Course(
                title="Python for Beginners",
                description="Learn the basics of Python programming",
                category="Programming",
                is_premium=False
            ),
            Course(
                title="Graphic Design Fundamentals",
                description="Learn the basics of graphic design",
                category="Design",
                is_premium=True
            )
        ]
        view = CourseListView()
        courses = view.get_queryset()
        self.assertEqual(len(courses), 2)
        self.assertEqual(courses[0].title, "Python for Beginners")
        self.assertEqual(courses[1].title, "Graphic Design Fundamentals")

class TestCourseDetailView(unittest.TestCase):
    @patch('app.views.Course.objects.get')
    def test_course_detail_view(self, mock_course_get):
        mock_course_get.return_value = Course(
            title="Python for Beginners",
            description="Learn the basics of Python programming",
            category="Programming",
            is_premium=False,
            lessons=[
                Lesson(
                    title="Introduction to Python",
                    description="Learn the basics of Python syntax and data types",
                    duration