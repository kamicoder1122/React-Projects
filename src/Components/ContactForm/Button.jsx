import style from "./Button.module.css";


const Button = ({propsisOutline, icon, text, ...rest}) => {
  return (
    <Button {...rest} className={isOutline_btn ? style.isOutline_btn : style.primary_btn}>
    {props.icon}
    {props.text}
    </Button>
  )
};
export default Button;