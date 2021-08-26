import Button from '../components/Button.vue';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        color: { control: 'text' },
        label: { control: 'text' },
        // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Button },
    template: `<Button
                v-bind="$props"
                />`,
    //   template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    label: 'Button',
};

// export const Large = Template.bind({});
// Large.args = {
//     color: "primary",
//     size: 'large',
//     label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//     color: "primary",
//     size: 'small',
//     label: 'Button',
// };
