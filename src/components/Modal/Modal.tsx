import { useEffect } from 'react'
import ReactDOM from 'react-dom';

type Props = {
    children: any;
}

const Modal = ({ children }: Props) => {
    const el = document.createElement('div') as HTMLDivElement;
    el.className = "modal";
    const parent = document.getElementById('___gatsby') as HTMLElement;
    useEffect(() => {
      parent.appendChild(el);
      return () => {
        parent.removeChild(el);
      }
    }, [el, parent]);
    return ReactDOM.createPortal(children, el);
}

export default Modal