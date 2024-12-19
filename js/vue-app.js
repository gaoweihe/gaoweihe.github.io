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

    const research_topics = [];

    let jekyll_site = window.jekyllSite;
    jekyll_site.data.papers.forEach((paper, index) => {
      paper.key = 'paper-' + index;
    });
    jekyll_site.data.patents.forEach((patent, index) => {
      patent.key = 'patent-' + index;
    });

    const getResearchTopicTagColor = (topic_name) => {
      if (research_topics.length == 0 || research_topics.at(0) == topic_name) {
        research_topics.push(topic_name);
        return 'hsl(0, 65%, 35%)';
      }

      const isTopicExist = research_topics.includes(topic_name);
      if (!isTopicExist) {
        research_topics.push(topic_name);
      }

      const topicIndex = research_topics.indexOf(topic_name); // starting from 0 
      console.log(topicIndex, topic_name);

      // Interpolate through binary subdivision
      // dividend = 2 * ((n + 1) - 2 ^ {floor(log_2 ^ {n + 1})}) + 1
      let dividend = 2 * ((topicIndex + 1) - Math.pow(2, Math.floor(Math.log2(topicIndex + 1)))) + 1;
      // divisor = 2 ^ {log_2 ^ n + 1}
      let divisor = Math.pow(2, Math.floor(Math.log2(topicIndex)) + 1);
      let hue = dividend / divisor;
      let color = `hsl(${hue * 360}, 65%, 35%)`;

      return color;
    };

    const getResearchTopicTagStyle = (topic_name) => {
      color = getResearchTopicTagColor(topic_name);
      border_color = color;

      return `color: ${color}; border-color: ${border_color}; margin-right: 5px;`;
    };

    const chunk_research_highlights = (chunk_size) => {
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

    const seal_data = (key, value) => {
      localStorage.setItem(key, value);
    }

    let pi_active_names = ref([]);
    let travelogue_active_names = ref([]);
    let project_active_names = ref([]);
    const restore_data = () => {
      if (localStorage.getItem('pi_active_names') == null) {
        seal_data('pi_active_names', JSON.stringify(["0"]));
      }
      pi_active_names = JSON.parse(localStorage.getItem('pi_active_names'));

      if (localStorage.getItem('travelogue_active_names') == null) {
        seal_data('travelogue_active_names', JSON.stringify([]));
      }
      travelogue_active_names = JSON.parse(localStorage.getItem('travelogue_active_names'));

      if (localStorage.getItem('project_active_names') == null) {
        seal_data('project_active_names', JSON.stringify(["0", "1", "2", "3", "4"]));
      }
      project_active_names = JSON.parse(localStorage.getItem('project_active_names'));
    }
    restore_data();

    const handle_pi_an_change = (val) => {
      seal_data('pi_active_names', JSON.stringify(val));
    };

    const handle_travelogue_an_change = (val) => {
      seal_data('travelogue_active_names', JSON.stringify(val));
    };

    const handle_projects_an_change = (val) => {
      seal_data('project_active_names', JSON.stringify(val));
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
      pi_active_names: pi_active_names,
      projects_active_names: project_active_names,
      travelogue_active_names: travelogue_active_names,
      jekyll_site: jekyll_site,
      chunk_research_highlights,
      seal_data,
      handle_pi_an_change,
      handle_travelogue_an_change,
      handle_projects_an_change,
    };
  },
};
const app = Vue.createApp(App);
app.use(ElementPlus, {});
app.mount("#vue-app");
