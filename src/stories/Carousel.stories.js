import Hero from '../components/Hero';
import '../../css/main.min.css';
export default {
    title: 'Components/Hero',
    component: Hero,
    argTypes: {
        cycle: { control: 'boolean' },
        hideDelimiters: { control: 'boolean' },
    }
};

export const CarouselCycleOn = () => ({
    components: { Hero },
    template: '<Hero cycle/>',
})
export const CarouselCycleOff = () => ({
    components: { Hero },
    template: '<Hero/>'
})
export const CarouselShowDelimiters = () => ({
    components: { Hero },
    template: '<Hero />'
})
export const CarouselHideDelimiters = () => ({
    components: { Hero },
    template: '<Hero hide-delimiters/>'
})