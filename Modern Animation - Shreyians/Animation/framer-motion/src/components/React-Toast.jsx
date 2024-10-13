import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReactToastify() {
    const notify = () => toast('Notification is here')

    const infoToast = () => toast.info('Info is here')

    const successToast = () => toast.success('Success is here')

    const warnToast = () => toast.error('Error is here');   

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <button style={{ padding: '10px', color: 'black', margin: '5px' }} onClick={notify}>Notify</button>
            <button style={{ padding: '10px', color: 'black', margin: '5px' }} onClick={infoToast}>Info</button>
            <button style={{ padding: '10px', color: 'black', margin: '5px' }} onClick={successToast}>Success</button>
            <button style={{ padding: '10px', color: 'black', margin: '5px' }} onClick={warnToast}>Error</button>
        </div>
    );
}

export default ReactToastify;