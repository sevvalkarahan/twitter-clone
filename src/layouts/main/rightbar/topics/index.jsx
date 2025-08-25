import { topics } from "../../../../util/consts";
import Topic from "./topic";
import SidebarSection from "../../../../components/sidebar-section"


export default function Topics() {
    return (
        <SidebarSection
            title="Neler Oluyor?"
            more="/trends"
        >
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
        </SidebarSection>
    )
}