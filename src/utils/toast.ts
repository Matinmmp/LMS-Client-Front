import { toast } from "react-toastify"

type Props = {
    type: 'warning' | 'error' | 'success'
    message: string
}


export const showToast = ({ type='success', message }: Props) => {
    if (type === 'success')
        toast.success(message)
    if (type === 'error')
        toast.error(message)
    if (type === 'warning')
        toast.warning(message)
}