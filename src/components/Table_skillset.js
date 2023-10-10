import skillset_data from "../skillset_data.json"

function Table_1() {

    const tablehead = Object.keys(skillset_data);
    const tdrow = (data) => {
        const row = [];
        for (var i = 0; i < data.length; i++) {
            row.push(<td>{data[i]}</td>)
        };
        return row;
    }
    return (
        <div>
            <h3>기술 스택</h3>
            <table>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {tablehead.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                            {tdrow(skillset_data[item])}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table_1;