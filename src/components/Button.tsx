import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    onClick?: () => void;
    secondary?: boolean;
}

export default function Button({ text, secondary, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}