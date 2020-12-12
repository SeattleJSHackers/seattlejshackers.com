import axios from 'axios';

class MeetupService {
  async getUpcomingEvents() {
    return await axios.get('https://api.meetup.com/seattlejshackers/events?status=upcoming&status=upcoming');
  }

  async getPastEvents() {
    return await axios.get('https://api.meetup.com/seattlejshackers/events?desc=true&status=past&desc=true&status=past');
  }
}

export default new MeetupService();