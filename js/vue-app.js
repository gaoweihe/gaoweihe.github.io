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
      "Graphics": "#9C47E2",
      "BME": "#FF8C44",
      "TEE": "#1D9C99",
      "OLAP": "#D4356C",
      "CivilEng": "#1D9C99",
      "MechEng": "#2F54EB",
      "SmartCities": "#F4A300",
    };

    let jekyll_site = window.jekyllSite; 
    jekyll_site.data.papers.forEach((paper, index) => {
      paper.key = 'paper-' + index;
    });
    jekyll_site.data.patents.forEach((patent, index) => {
      patent.key = 'patent-' + index;
    });
    
    const getResearchTopicTagStyle = (topic_name) => {
      color = research_topics[topic_name];
      border_color = color;
      return `color: ${color}; border-color: ${border_color}; margin-right: 5px;`;
    };

    const chunkResearchHighlights = (chunk_size) => {
      let highlights = [];
      for (const paper of jekyll_site.data.papers) {
        if (paper.highlight == 1) {
          highlights.push(paper);
        }
      }
      for (const patent of jekyll_site.data.patents) {
        if (patent.highlight == 1) {
          highlights.push(patent);
        }
      }

      let highlights_chunked = [];
      for (let i = 0; i < highlights.length; i += chunk_size) {
        highlights_chunked.push(highlights.slice(i, i + chunk_size));
      }

      return highlights_chunked;
    };

    const is_loaded = ref(false);

    onMounted(() => {
      localStorage.setItem('message', 'Welcome!');

      setInterval(swapWord, 300); // Swap word every 0.3 seconds

      const tagElements = document.querySelectorAll(".topic-tag");
      tagElements.forEach((tag) => {
        topic_name = tag.getAttribute("topic");
        tag_style = getResearchTopicTagStyle(topic_name);
        tag.setAttribute("style", tag_style);
      });

      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--hidden-before-vue",
          "visible"
        );
        is_loaded.value = true;
      }, 200);
    });

    return {
      is_loaded: is_loaded,
      message: "Hello World!",
      fox_adjective,
      activeNames: ["1"],
      projects_active_names: ["1", "2", "3", "4", "5"],
      travelogue_active_names: [],
      jekyll_site: jekyll_site, 
      chunkResearchHighlights, 
    };
  },
};
const app = Vue.createApp(App);
app.use(ElementPlus, {});
app.mount("#vue-app");
