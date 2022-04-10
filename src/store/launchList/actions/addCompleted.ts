import { ADD_COMPLETED } from "../types"
import { ILaunchData } from "../models"

export const addCompleted = (launchList: ILaunchData) => ({
    type: ADD_COMPLETED,
    payload: launchList
})