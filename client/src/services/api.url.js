export const API_URLS = {
    saveSentEmail: {
        endpoint: 'save',
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    saveDraftEmails: {
        endpoint: 'drafts',
        method: 'POST'
    },
    moveEmailsToBin: {
        endpoint:'bin',
        method: 'POST'
    },
    toggleStarredEmail: {
        endpoint: 'starred',
        method: 'POST'
    },
    deleteEmail : {
        endpoint:'delete',
        method: 'DELETE'
    }
}