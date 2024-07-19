import theme from "@/app/styles/theme";


type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, lineHeight, color, Fmin, Fmax}:FontPropsType) => `
    font-weight: ${weight || 400};
    color: ${color || theme.colors.colorTextPrimary};
    line-height: ${lineHeight || 1.5};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
   `