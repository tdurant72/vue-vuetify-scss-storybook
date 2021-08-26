import Gallery from '../components/Gallery';

export default {
    title: 'Components/Gallery',
    component: Gallery,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Gallery },
    template:
        '<Gallery :items="items" />',
});

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            id: 1,
            src: require("../assets/images/img1.jpeg")
        },
        {
            id: 2,
            src: require("../assets/images/img2.jpeg")
        },
        {
            id: 3,
            src: require("../assets/images/img3.jpeg")
        },
        {
            id: 4,
            src: require("../assets/images/img4.jpeg")
        },
        {
            id: 5,
            src: require("../assets/images/img5.jpeg")
        },
        {
            id: 6,
            src: require("../assets/images/img6.jpeg")
        },
        {
            id: 7,
            src: require("../assets/images/img7.jpeg")
        }
    ],
};


