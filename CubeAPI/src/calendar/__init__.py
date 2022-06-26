import json
import datetime


class Calendar:
    path = "./data/calendar_data.json"

    @staticmethod
    def add(meeting: 'Meeting'):
        meetings = Calendar.getData()
        # meetings.append(meeting)
        return meetings

    @staticmethod
    def getData() -> json:
        f = open(Calendar.path, "r")
        data = f.read()
        return json.loads(data)

    @staticmethod
    def update(meetings: json):
        with open(Meeting.path, 'w') as data_file:
            json.dump(meetings, data_file)

    # Private static method
    @staticmethod
    def __remove(meetings: json, meeting: 'Meeting'):
        i = 0
        for check_meeting in meetings:
            if Meeting(check_meeting) == meeting:
                del meetings[i]
            i += 1

        Calendar.update(meetings)

    # Returns the next upcoming meeting
    @staticmethod
    def getNext():
        # Filter all meetings from the past and remove them
        filtered_meetings = Calendar.filterMeetings()

        # Set index number for the loop
        # And initialize save_meeting as None
        i = 0
        save_meeting = None

        # For each meeting in next_meetings
        for meeting in filtered_meetings:

            # Check if filtered_meetings has more than 1 meetings
            if len(filtered_meetings) > 1:

                # Check if save_meeting is not None
                if save_meeting is not None:

                    # Check if save_meeting is later than meeting
                    if meeting < save_meeting:
                        save_meeting = meeting

                # Else check if a next meeting exists in the next_meeting list
                elif i + 1 < len(filtered_meetings):
                    if meeting < filtered_meetings[i + 1]:
                        save_meeting = meeting

                # last meeting from filtered_meetings
                elif i + 1 == len(filtered_meetings):
                    save_meeting = meeting

            # Else no more meetings exists
            else:
                save_meeting = meeting

            # Add 1 to the index
            i += 1

        return save_meeting

    # Returns the count of total meetings
    @staticmethod
    def countMeetings() -> int:
        meetings = Calendar.getData()

        i = 0
        for meeting in meetings:
            i += 1

        return i

    # Returns a filtered lists of all meetings in the future
    @staticmethod
    def filterMeetings() -> list['Meeting']:
        # Get all meetings
        meetings = Meeting.getData()

        # Initialize filter_meetings as list
        filter_meetings = []

        # Loop through all meetings
        for meeting in meetings:
            # Create a Meeting of all data in meeting
            meeting = Meeting(meeting)

            # Check if meeting is in the past
            if meeting.isPast():
                # Remove meeting
                Calendar.__remove(meetings, meeting)
            else:
                # Else append to the filter_meetings list
                filter_meetings.append(meeting)

        return filter_meetings


class Meeting(Calendar):
    def __init__(self, meeting: json):
        self.meeting_time: list[str, str] = [meeting["time"]["begin"], meeting["time"]["end"]]
        self.meeting_description: str = meeting["description"]
        self.meeting_date: str = meeting["date"]
        self.meeting_loc: str = meeting["location"]
        self.meeting_title: str = meeting["title"]

    # Returns True if meeting is from the past
    def isPast(self) -> bool:
        now = datetime.datetime.now()
        date_of_meeting = Meeting.getDateTime(self)
        return date_of_meeting < now

    def __gt__(self, other: 'Meeting') -> bool:
        return Meeting.getDateTime(self) > Meeting.getDateTime(other)

    def __lt__(self, other: 'Meeting') -> bool:
        return Meeting.getDateTime(self) < Meeting.getDateTime(other)

    def __eq__(self, other: 'Meeting') -> bool:
        return Meeting.getDateTime(self) == Meeting.getDateTime(other)

    def __str__(self) -> json:
        return json.loads(
            "date: " + self.meeting_date +
            ", title: " + self.meeting_title +
            ", location: " + self.meeting_loc +
            ", description: " + self.meeting_description +
            ", time: {begin: " + self.meeting_time[0] + ", end: " + self.meeting_time[1] + "}"
        )

    # Returns a DateTime object value
    @staticmethod
    def getDateTime(meeting: 'Meeting'):
        split_date = meeting.meeting_date.split("-")
        split_time = meeting.meeting_time[0].split(":")

        return datetime.datetime(year=int(split_date[0]), month=int(split_date[1]), day=int(split_date[2]),
                                 hour=int(split_time[0]), minute=int(split_time[1]))
