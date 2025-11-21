const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg text-text w-full min-w-3xl max-w-7xl mx-auto">
            <main>{children}</main>
        </div>
    );
};

export default Layout;
