import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100">

            {/* Header Section */}
            <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
                <div className="logo">
                    <h1 className="text-4xl font-Pacifico">DesigNeed</h1> {/* Your logo here with Pacifico font */}
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-500">About</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Features</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-gray-800 text-white text-center py-20">
                <h2 className="text-5xl font-bold mb-4">Welcome to DesigNeed</h2>
                <p className="text-lg mb-6">Your platform for connecting brands with designers.</p>
                <a href="#" className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-yellow-400 transition">Get Started</a>
            </section>

            {/* Features Section */}
            <section className="text-center py-20">
                <h3 className="text-3xl font-bold mb-12">Our Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="feature-item bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-4">Design Listings</h4>
                        <p>Brands post their design needs, and designers can pitch ideas.</p>
                    </div>
                    <div className="feature-item bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-4">Mood Boards</h4>
                        <p>Create and share mood boards to visualize ideas.</p>
                    </div>
                    <div className="feature-item bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-4">Real-time Feedback</h4>
                        <p>Get instant feedback on your designs.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2025 DesigNeed. All rights reserved.</p>
                <div className="social-links mt-4">
                    <a href="#" className="mx-3 hover:text-yellow-500">Facebook</a>
                    <a href="#" className="mx-3 hover:text-yellow-500">Instagram</a>
                    <a href="#" className="mx-3 hover:text-yellow-500">Twitter</a>
                </div>
            </footer>

        </div>
    );
}

export default Home;
