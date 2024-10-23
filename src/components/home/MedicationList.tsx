const MedicationList = () => {
    const medications = [
        { name: 'Medication 1' },
        { name: 'Medication 2' },
    ];

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Medication</h3>
            <ul className="mt-2 space-y-2">
                {medications.map((med, index) => (
                    <li key={index} className="p-4 bg-green-100 rounded-lg flex justify-between items-center">
                        <span>{med.name}</span>
                        <button className="text-blue-500">Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicationList;
