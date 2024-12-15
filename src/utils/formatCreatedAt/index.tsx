
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatCreatedAt = (createdAt: string) => {
    const now = dayjs();
    const createdTime = dayjs(createdAt);

    if (now.diff(createdTime, "day") < 1) {
      // Less than a day ago: relative time
      return createdTime.fromNow();
    } else {
      // More than a day ago: specific time and date
      return `${createdTime.format("HH:mm")} - ${createdTime.format(
        "DD/MM/YYYY"
      )}`;
    }
  };