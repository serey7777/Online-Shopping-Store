// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Navbar />
                    <main className="main-content">
                        <AppRoutes />
                    </main>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;

// Optional: App.css for basic layout
/* App.css */
