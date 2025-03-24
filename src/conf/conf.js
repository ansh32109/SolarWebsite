const appwriteConfigs = {
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteURL: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
}

export default appwriteConfigs