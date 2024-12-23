import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UserManagement from './pages/UserManagement';
import PostManagement from './pages/PostManagement';
import DeletedPostManagement from './pages/DeletedPostManagement';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
            <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute>
                                <UserManagement />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/posts"
                        element={
                            <ProtectedRoute>
                                <PostManagement />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/delete_posts"
                        element={
                            <ProtectedRoute>
                                <DeletedPostManagement />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
