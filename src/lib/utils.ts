import dayjs from "dayjs"

export const convertDate = (date: string) => dayjs(date).format("DD MMM YYYY")
