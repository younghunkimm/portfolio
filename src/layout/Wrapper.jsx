const Wrapper = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg text-text w-full min-w-3xl">
            {children}
        </div>
    );
};

export default Wrapper;
