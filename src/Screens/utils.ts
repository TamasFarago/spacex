export const formatDate = (time: string): string => {
    const date = new Date(time)
    const year = date.getFullYear()
    const monthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = date.getMonth()
    const day = date.getDate()
    return `${monthMap[month]} ${day}. ${year}`
}

export const missionStatus = (detailsStatus: boolean | null): string => {
    const status = detailsStatus
    switch(status) {
        case null:
            return "Waiting for Launch"
        case false:
            return "Failed"
        case true:
            return "Successful Launch"
    }
}