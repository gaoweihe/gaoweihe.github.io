const { createApp, ref, onMounted } = Vue;

const App = {
    setup() {
        const words = ["chubby", "fluffy", "plumpy", "bouncy", "plushy"];
        const fox_adjective = ref(words[0]);
        let index = 0;

        const swapWord = () => {
            index = (index + 1) % words.length;
            fox_adjective.value = words[index]; 
        };

        const research_topics = {
            "ML/AI": "#409EFF", 
            "Logs": "#67C23A", 
            "Sec": "#E6A23C", 
            "Crypto": "#F56C6C", 
            "IoT": "#13C2C2", 
            "Sched": "#F8D02A", 
            "Img": "#9C47E2", 
            "BME": "#FF8C44", 
            "TEE": "#1D9C99", 
            "OLAP": "#D4356C", 
            "CivilEng": "#1D9C99",
            "MechEng": "#2F54EB",
            "SmartCities": "#F4A300", 
        }

        const getResearchTopicTagStyle = (topic_name) => {
            color = research_topics[topic_name];
            border_color = color;
            return `color: ${color}; border-color: ${border_color};`;
        }

        onMounted(() => {
        setInterval(swapWord, 300); // Swap word every 0.3 seconds
        const tagElements = document.querySelectorAll('.topic-tag');
        tagElements.forEach(tag => {
            topic_name = tag.getAttribute('topic');
            tag_style = getResearchTopicTagStyle(topic_name);
            tag.setAttribute('style', tag_style);
            console.log(tag_style);
        })
        });

        return {
        fox_adjective, 
        activeNames: ["1"],
        projects_active_names: ["1", "2", "3", "4", "5"],
        travelogue_active_names: [],
        };
    },
};
const app = Vue.createApp(App);
app.use(ElementPlus, {});
app.mount("#element-ui-app");
