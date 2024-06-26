//IMPORTANT -- PRODUCTION GRADE PRACTICE--
const conf = {
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    aapWriteProjectId :  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    openAiKey : String(import.meta.env.VITE_OPENAI_API_KEY ),
    tinyMCEApiKey : String(import.meta.env.VITE_TINYMCE_API_KEY)
    }
export default conf