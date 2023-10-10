import Table_projects from "../components/Table_projects";
import exp_project from "../exp_project.json";

function ViewProject() {
    const projectTitles = Object.keys(exp_project);
    console.log("projectTitle:" + projectTitles);
    console.log(projectTitles.length);
    const project = () => {
        const row = []
        for (var i = 1; i < projectTitles.length; i++) {
            console.log("들어가는 거:" + projectTitles[i]);
            row.push(<Table_projects projectTitle={projectTitles[i]}></Table_projects>)
        };
        return row;
    };
    return (
        <div>
            <h3>과제 프로젝트 경험</h3>
            {project()}
        </div>
    )
}

export default ViewProject;