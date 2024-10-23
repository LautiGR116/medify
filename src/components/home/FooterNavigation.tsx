const FooterNavigation = () => {
    const navItems = [
        { label: 'Medication', icon: '💊' },
        { label: 'Welfare', icon: '❤️' },
        { label: 'Home', icon: '🏠' },
        { label: 'Appointments', icon: '📅' },
        { label: 'Profile', icon: '👤' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between">
            {navItems.map((item, index) => (
                <button key={index} className="flex flex-col items-center text-sm">
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default FooterNavigation;
