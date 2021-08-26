import Header from '../components/Header'

export default {
    title: 'Components/Header',
    component: Header,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Header },
    template:
        '<Header  />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};