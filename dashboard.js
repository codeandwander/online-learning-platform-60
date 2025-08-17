// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Dashboard component
function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Fetch course data from the server
    async function fetchCourses() {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
      setFilteredCourses(response.data);
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    // Filter courses based on search term and active category
    const filtered = courses.filter((course) => {
      const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = activeCategory === 'all' || course.category === activeCategory;
      return searchMatch && categoryMatch;
    });
    setFilteredCourses(filtered);
  }, [courses, searchTerm, activeCategory]);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle category filter change
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Online Learning Platform</h1>
        <nav>
          <ul>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="search-filter">
          <input type="text" placeholder="Search courses..." value={searchTerm} onChange={handleSearch} />
          <div className="category-filters">
            <button
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => handleCategoryFilter('all')}
            >
              All
            </button>
            <button
              className={activeCategory === 'programming' ? 'active' : ''}
              onClick={() => handleCategoryFilter('programming')}
            >
              Programming
            </button>
            <button
              className={activeCategory === 'design' ? 'active' : ''}
              onClick={() => handleCategoryFilter('design')}
            >
              Design
            </button>
            <button
              className={activeCategory === 'business' ? 'active' : ''}
              onClick={() => handleCategoryFilter('business')}
            >
              Business
            </button>
          </div>
        </section>

        <section className="course-catalog">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.thumbnail} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.category}</p>
              <p>
                {course.isFree ? (
                  <span className="badge free">Free</span>
                ) : (
                  <span className="badge premium">Premium</span>
                )}
              </p>
              <Link to={`/course/${course.id}`}>View Course</Link>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Online Learning Platform</p>
      </footer>
    </div>
  );
}

// Router setup
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>