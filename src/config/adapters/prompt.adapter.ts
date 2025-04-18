import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    subTitle?:string;
    buttons:PromtButton[];
    promtType?:'plain-text'|'secure-text';
    defaulValue?:string;
    placeholder?:string;
}

interface PromtButton {
    text: string;
    onPress: () =>void;
    style?:'cancel' | 'default' | 'destructive'
}
export const showPrompt = ({title,subTitle,buttons,promtType = 'plain-text',defaulValue,placeholder}:Options) =>{
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promtType,
            cancelable: false,
            defaultValue: defaulValue,
            placeholder: placeholder,
        }
    );

};
