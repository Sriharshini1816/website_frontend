const NODE_API = import.meta.env.VITE_NODE_API;
const PYTHON_API = import.meta.env.VITE_PYTHON_API;

// Auth
export const signup = async (data) => {
  const res = await fetch(`${NODE_API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${NODE_API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Courses
export const fetchCourses = async () => {
  const res = await fetch(`${NODE_API}/courses`);
  return res.json();
};

// Universities
export const fetchUniversities = async () => {
  const res = await fetch(`${NODE_API}/universities`);
  return res.json();
};

// Recommendations (Python ML Service)
export const fetchRecommendations = async (userId) => {
  const res = await fetch(`${PYTHON_API}/recommend/${userId}`);
  return res.json();
};
