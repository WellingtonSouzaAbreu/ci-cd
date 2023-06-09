import * as LocalAuthentication from 'expo-local-authentication';

async function handleActionWithAuthentication(func: Function) {
    /* 
    const handleLocalAuthentication = async () => {
        try {
            await handleActionWithAuthentication(loggar)
        } catch (err) {
            console.log(err)
        }
    }
     */

    const config = {
        cancelLabel: 'cancelLabel',
        promptMessage: 'Confirme sua identidade',
        requireConfirmation: false
    }

    const hasAuth = await LocalAuthentication.authenticateAsync(config);
    if (hasAuth.success) {
        func()
    } else {
        throw new Error('Authentication failed')
    }
}

export { handleActionWithAuthentication }