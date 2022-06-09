import datetime
from typing import Optional


class Log:
    def __init__(self, log_msg: Optional[str] = None) -> None:
        self.file = "./src/log/logs.txt"

        if log_msg is not None:
            self.createLog(log_msg)

    def getLogs(self, date: Optional[str] = None) -> dict[datetime, str] or False:
        try:
            # Open File for reading only
            f = open(self.file, "r")

            # Read File
            logs_txt = f.read()

            # Close File
            f.close()

            # Split all logs at the end of the sentence
            logs_array = logs_txt.split("\n")

            logs_dict: dict[datetime, str] = {}
            for log_str in logs_array:
                if len(log_str) != 0:
                    # First strip the sentence, then split at the datetime value
                    log_list = log_str.strip().split(": ")

                    # Check if date is set and log is from that date
                    if date is not None and date in log_list[0] or date is None:
                        logs_dict[log_list[0]] = log_list[1]

            return logs_dict

        except OSError:
            return False

    def createLog(self, log_msg: str) -> bool:
        try:
            today = datetime.datetime.today()
            f = open(self.file, "a")
            f.write(f"{today}: {log_msg} \n")
            f.close()
            return True
        except OSError:
            return False

    def cleanFile(self):
        res = self.getLogs()
        today = datetime.date.today()
        lastMonth = today - datetime.timedelta(weeks=4)
        filter_dict: dict[datetime, str] = {}
        for date in res.keys():
            split_date = date[:10].split("-")
            date_of_res_key = datetime.date(int(split_date[0]), int(split_date[1]), int(split_date[2]))
            if lastMonth < date_of_res_key:
                filter_dict[date] = res[date]
                # print(filter_dict[date])

        f = open(self.file, "w")
        for date, msg in filter_dict.items():
            f.write(f"{date}: {msg}\n")
        f.close()


# def log(logType: int, text: str):
#     types = {
#         0: "Alert",
#         1: "Battery"
#     }
#
#     logType = types.get(logType, "nothing")
#
#     return \
#         {
#             "Log": logType,
#             "Message": text
#         }
