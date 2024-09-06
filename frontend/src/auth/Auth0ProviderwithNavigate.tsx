import { AppState, Auth0Provider, User } from "@auth0/auth0-react"

type props = {
    children: React.ReactNode
}

export default function Auth0ProviderWithNavigate(
    {children}: props
){
    const domain = import.meta.env.VITE_AUTH0_DOMAIN as string
    const clientId = import.meta.env.VITE_CLIENT_ID as string
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL as string
    if (!domain || !clientId || !redirectUri){
        throw new Error("Unable to initialize auth")
    }
    const onRedirectCallback = (appState?: AppState, user?:User)=>{
        console.log(user)
    } 
    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: redirectUri
        }}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}