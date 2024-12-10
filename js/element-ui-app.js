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

        onMounted(() => {
        setInterval(swapWord, 300); // Swap word every 0.3 seconds
        });

        return {
        fox_adjective, 
        activeNames: ["1"],
        projects_active_names: ["1", "2", "3", "4", "5"],
        travelogue_active_names: [],
        };
    },
    methods: {},
};
const app = Vue.createApp(App);
app.use(ElementPlus, {});
app.mount("#element-ui-app");