const InfoTable = ({ headers, data }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border border-zinc-700 text-sm text-left">
                <thead className="bg-zinc-800 text-zinc-300">
                    <tr>
                        {headers.map((header, idx) => (
                            <th
                                key={idx}
                                className="px-4 py-3 border border-zinc-700"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="text-zinc-200">
                    {data.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="px-4 py-3 border border-zinc-700"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InfoTable;
