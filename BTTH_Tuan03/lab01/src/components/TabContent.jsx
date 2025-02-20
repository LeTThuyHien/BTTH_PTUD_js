import { useState, useRef, useEffect } from "react";
import "./Tabs.css";

const TabContent = () => {
    const tabs = [
        {
            name: "React",
            content:
                "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        },
        {
            name: "Angular",
            content:
                "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.",
        },
        {
            name: "Ember",
            content:
                "Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.",
        },
        {
            name: "Vue.JS",
            content:
                "Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
        },
    ]; 

    const [activeIndex, setActiveIndex] = useState(0);
    const lineRef = useRef(null);
    const tabRefs = useRef([]);

    useEffect(() => {
        if (tabRefs.current[activeIndex] && lineRef.current) {
            const activeTab = tabRefs.current[activeIndex];
            lineRef.current.style.left = `${activeTab.offsetLeft}px`;
            lineRef.current.style.width = `${activeTab.offsetWidth}px`;
        }
    }, [activeIndex]);

    return (
        <div className="tabs">
            
            <div className="tab-list">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className={`tab-item ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.name}
                    </div>
                ))}
                <div className="tab-line" ref={lineRef}></div>
            </div>

            
            <div className="tabs-content">
                {tabs.map((tab, index) => (
                    <div key={index} className={`tab-pane ${index === activeIndex ? "active" : ""}`}>
                        <h2>{tab.name}</h2>
                        <p>{tab.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabContent;
