import Popup from './Popup';

export default {
    title: 'Layout/Popup',
    component: Popup,
};

export const Outlined = {
    args : {
        title: "Title",
        text: "Are you sure you want to delete this item? This action cannot be undone.",
        destructiveButtonText: "Button",
        confirmButtonText: "Button",
        variantType: 'outlined'
    }
}

export const Fulfilled = {
    args : {
        title: "Title",
        text: "Are you sure you want to delete this item? This action cannot be undone.",
        destructiveButtonText: "Button",
        confirmButtonText: "Button",
        variantType: 'filled'
    }
}