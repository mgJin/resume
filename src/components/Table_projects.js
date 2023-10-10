import exp_project from "../exp_project.json"

function Table_projects({ projectTitle }) {
    const tProject = exp_project[projectTitle]; //해당 프로젝트를 받기
    const list = Object.keys(tProject); //프로젝트에 기술할 것들의 목록

    const tdrow = (data) => {
        const row = []
        if (typeof (data) == "string") {
            row.push(<td>{data}</td>)
        } else {
            for (var i = 0; i < data.length; i++) {
                row.push(<td>{data[i]}</td>)
            }
        }
        return row;
    }
    return (
        <>
            <h4>{projectTitle}</h4>
            <table>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                            {tdrow(tProject[item])}
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table_projects;