//IMPORTANT -- PRODUCTION GRADE PRACTICE--
const conf = {
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    aapWriteProjectId :  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    openAiKey : String(import.meta.env.VITE_OPENAI_API_KEY ),
    tinyMCEKey : String(import.meta.env.VITE_TINYMCE_API_KEY)
}
/**kahi br aisa hota h k env variables load nhi hote h ya usko string na le ke
   eg agr id" 1234g56" hai tab toh string lega agr id"123456" hai toh js isko number 
   leleta h isliye zaruri h isko String mr wrap krke bhje aur simple variable name rkh k bhi
   isliye this is a PRODUCTION GRADE PRATICE 
*/
export default conf