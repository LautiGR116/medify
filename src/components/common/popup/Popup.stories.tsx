import Popup from './Popup';

export default {
    title: 'Common/Popup',
    component: Popup,
};

export const Default = {
    args : {
        title: "Title",
        text: "Are you sure you want to delete this item? This action cannot be undone.",
        destructiveButtonText: "Button",
        confirmButtonText: "Button"
    }
}